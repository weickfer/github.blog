import externalIcon from '../../assets/icons/arrow-up-right-from-square-solid.svg'
import githubIcon from '../../assets/icons/github-brands.svg'
import buildingIcon from '../../assets/icons/building-solid.svg'
import userGroupIcon from '../../assets/icons/user-group-solid.svg'

import { Link, TextMedium, TextSmall, TitleLarge, TitleMedium, TitleSmall } from "../../styles/fonts";
import { HomeContainer, Profile, Avatar, Bio, Info, SearchInput, PostsGrid, PostCard } from "./styles";
import { ChangeEvent, useEffect } from 'react';
import { getPosts, getUser, GithubUser, IssueItem } from '../../services/github';
import { useGithub } from '../../contexts/GithubAPIContext';
import { NavLink } from 'react-router-dom';

export function Home() {
  const { user, posts, queryPosts, fetchUser } = useGithub({
    username: 'weickfer',
    repository: 'github.blog',
  })

  useEffect(() => {
    (async () => {
      await fetchUser()
      await queryPosts()
    })()
  }, [])

  const searchPosts = async (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value

    if (!(query.length > 4)) return

    const posts = await queryPosts(query)

    if (posts.length !== 0) {
      event.target.value = ''
    }
  }

  const userUrl = `https://github.com/${user.login}`
  const followersLabel = ['seguidor', user.followers > 1 && 'es'].filter(Boolean).join('')

  return (
    <HomeContainer>
      <Profile>
        <Avatar url={`${userUrl}.png`} />
        <Bio>
          <header>
            <TitleLarge>{user.name}</TitleLarge>
            <Link target="_blank" href={userUrl} >GITHUB <img src={externalIcon} /></Link>
          </header>

          <TextMedium>
            {user.bio}
          </TextMedium>

          <Info>
            <TextMedium><img src={githubIcon} /> {user.login}</TextMedium>
            {user.company && <TextMedium><img src={buildingIcon} /> {user.company}</TextMedium>}
            <TextMedium><img src={userGroupIcon} /> {`${user.followers} ${followersLabel}`}</TextMedium>
          </Info>
        </Bio>
      </Profile>

      <div>
        <TitleSmall>Publicações</TitleSmall>
        <TextSmall>{posts.length} publicações</TextSmall>
      </div>

      <SearchInput placeholder="Buscar conteúdo" onChange={searchPosts} />

      <PostsGrid>
        {posts.map(post => (
          <NavLink key={post.id} style={{
            textDecoration: 'none',
          }} to={`/posts/${post.number}`}>
            <PostCard>
              <div>
                <TitleMedium>{post.title}</TitleMedium>
                <TextSmall>{post.created_at}</TextSmall>
              </div>

              <main>
                <TextMedium>
                  {post.body}
                </TextMedium>
              </main>
            </PostCard>
          </NavLink>
        ))}
      </PostsGrid>
    </HomeContainer>
  )
}
