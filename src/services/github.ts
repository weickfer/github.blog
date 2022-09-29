import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export const githubApi = axios.create({
  baseURL: 'https://api.github.com'
})

export type GithubUser = {
  name: string
  company?: string
  bio: string;
  login: string;
  followers: number
}

export type IssueItem = {
  id: string;
  number: number;
  title: string
  body: string
  created_at: string
  html_url: string;
  user: GithubUser
  comments: number
}

export type GithubIssue = {
  total_count: number
  items: Array<IssueItem>
}

export async function getUser(username: string) {
  const user = await githubApi.get<GithubUser>(`/users/${username}`)

  return user?.data
}

export async function getPosts(username: string, repo: string) {
  const issues = await githubApi.get<GithubIssue>(`/search/issues?q=repo:${username}/${repo}`)
  const formattedIssues = issues?.data.items.map(item => ({
    ...item,
    created_at: formatDistanceToNow(new Date(item.created_at), {
      locale: ptBR,
      addSuffix: true
    })
  }))

  return formattedIssues
}

export async function queryPosts(username: string, repo: string, query: string) {
  const issues = await githubApi.get<GithubIssue>(`/search/issues?q=${query}%20repo:${username}/${repo}`)
  const formattedIssues = issues?.data.items.map(item => ({
    ...item,
    created_at: formatDistanceToNow(new Date(item.created_at), {
      locale: ptBR,
      addSuffix: true
    })
  }))

  return formattedIssues
}
