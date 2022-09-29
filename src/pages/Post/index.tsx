import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import rangeParser from 'parse-numeric-range'
import leftArrowIcon from '../../assets/icons/chevron-left-solid.svg'
import externalIcon from '../../assets/icons/arrow-up-right-from-square-solid.svg'
import githubIcon from '../../assets/icons/github-brands.svg'
import calendarIcon from '../../assets/icons/calendar-day-solid.svg'
import commentIcon from '../../assets/icons/comment-solid.svg'

import { Link, TextMedium, TitleLarge } from "../../styles/fonts";
import { MarkdownContainer, PostContainer, PostDetails, PostInfo } from "./styles";
import { useGithub } from '../../contexts/GithubAPIContext'
import { IssueItem } from '../../services/github'
import { useTheme } from 'styled-components';

type Params = {
  '*': string
}

export function Post() {
  const [post, setPost] = useState({} as IssueItem)
  const params = useParams<Params>()
  const { colors } = useTheme()
  const { fetchPostByNumber } = useGithub({
    username: 'weickfer',
    repository: 'github.blog',
  })

  useEffect(() => {
    fetchPostByNumber(Number(params['*'])).then(issue => setPost(issue))
  }, [])

  const commentsLabel = ['comentário', post?.comments > 1 && 's'].filter(Boolean).join('')

  return (
    <PostContainer>
      <PostInfo>
        <header>
          <NavLink to="/">
            <Link>
              <img src={leftArrowIcon} /> VOLTAR
            </Link>
          </NavLink>
          <NavLink to={post?.html_url} target="_blank">
            <Link>
              VER NO GITHUB <img src={externalIcon} />
            </Link>
          </NavLink>
        </header>

        <TitleLarge>{post.title}</TitleLarge>

        <PostDetails>
          <TextMedium><img src={githubIcon} /> {post?.user?.login}</TextMedium>
          <TextMedium><img src={calendarIcon} /> {post.created_at}</TextMedium>
          {
            post.comments > 0 && <TextMedium><img src={commentIcon} /> {`${post.comments} ${commentsLabel}`}</TextMedium>
          }
        </PostDetails>
      </PostInfo>

      <MarkdownContainer>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </MarkdownContainer>
    </PostContainer>
  )
}