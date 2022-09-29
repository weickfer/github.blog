import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { createContext, ReactNode, useContext, useState } from "react";
import { GithubUser, IssueItem, githubApi, GithubIssue } from "../services/github";

type GithubContextData = {
  isLoading: boolean
  user: GithubUser
  posts: Array<IssueItem>
  fetchUser(username: string): () => Promise<void>
  fetchPostByNumber(username: string, repository: string): (number: number) => Promise<IssueItem>
  queryPosts(username: string, repository: string): (query?: string) => Promise<Array<IssueItem>>
}

export const GithubContext = createContext({} as GithubContextData)

type GithubContextProviderProps = {
  children: ReactNode
}

const postFormatter = (post: IssueItem) => ({
  ...post,
  created_at: formatDistanceToNow(new Date(post.created_at), {
    locale: ptBR,
    addSuffix: true
  })
})

export function GithubContextProvider({ children }: GithubContextProviderProps) {
  const [user, setUser] = useState({} as GithubUser)
  const [posts, setPosts] = useState([] as Array<IssueItem>)
  const [error, setError] = useState('')
  const hasError = !!error
  const userIsNull = Object.keys(user).length === 0
  const isLoading = hasError ? false : userIsNull || posts.length === 0

  const fetchUser = (username: string) => {
    return async () => {
      try {
        const fetchedUser = await githubApi.get<GithubUser>(`/users/${username}`)

        setUser(fetchedUser.data)
      } catch (error) {
        setError('[GithubContext] Error on user fetch.')
      }
    }
  }

  const fetchPostByNumber = (username: string, repository: string) => {
    return async (number: number) => {
      const issue = await githubApi.get<IssueItem>(`/repos/${username}/${repository}/issues/${number}`)
    
      return postFormatter(issue.data)
    }
  }

  const queryPosts = (username: string, repository: string) => {
    return async (query?: string) => {
      const issuesQuery = [query, `repo:${username}/${repository}`].filter(Boolean).join('%20')
      const issues = await githubApi.get<GithubIssue>(`/search/issues?q=${issuesQuery}`)
      const formattedIssues = issues?.data.items.map(postFormatter)

      setPosts(formattedIssues)

      return formattedIssues
    }
  }

  return (
    <GithubContext.Provider value={{ isLoading, user, posts, fetchUser, queryPosts, fetchPostByNumber }}>
      {children}
    </GithubContext.Provider>
  )
}

type UseGithubData = {
  username: string
  repository: string 
}

export function useGithub({ username, repository }: UseGithubData) {
  const context = useContext(GithubContext)

  const fetchUser = context.fetchUser(username)
  const queryPosts = context.queryPosts(username, repository)
  const fetchPostByNumber = context.fetchPostByNumber(username, repository)

  const states = {
    user: context.user, 
    posts: context.posts,
    isLoading: context.isLoading
  }

  return { fetchUser, queryPosts, fetchPostByNumber, ...states  }
}
