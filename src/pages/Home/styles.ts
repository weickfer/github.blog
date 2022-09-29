import styled from "styled-components";
import { Link, TextMedium, TextMediumCss, TitleSmall } from "../../styles/fonts";

export const HomeContainer = styled.div`
  max-width: 56rem;
  padding: 0 1rem;
  margin: 0 auto;

  > div:has(${TitleSmall}) {
    margin-top: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Profile = styled.div`
  width: 100%;
  height: 13.25rem;
  border-radius: 10px;
  background: ${props => props.theme.colors.profile};
  padding: 2rem;

  display: flex;
  flex-direction: row;
  gap: 2rem;
`


type AvatarProps = {
  url: string;
}

export const Avatar = styled.div<AvatarProps>`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  background-image: url(${props => props.url});
  background-size: cover;
`

export const Bio = styled.div`
  display: flex;
  flex-direction: column;

  header {
    display: flex;

    h1 {
      color: ${props => props.theme.colors.title};
    }
  }

  ${Link} {
    color: ${props => props.theme.colors.blue};
    display: block;
    margin-left: auto;
    
    img {
      margin-left: 2px;
      
      width: 12px;
      height: 12px;
    }
  }

  ${TextMedium} {
    margin-top: 1rem;
    color: ${props => props.theme.colors.text};
    line-height: 140%;
  }
`

export const Info = styled.footer`
  display: flex;
  margin-top: auto;
  flex-direction: row;
  gap: 2rem;
  margin-top: auto;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  img {
    width: 18px;
    height: 18px;
    line-height: 0;
  }
`

export const SearchInput = styled.input`
  margin-top: 0.75rem;

  width: 100%;
  height: 3.125rem;
  border: 0;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 6px;
  background: ${props => props.theme.colors.input};
  padding: 0 1rem;

  &::placeholder {
    color: ${props => props.theme.colors.label};
  }

  /* Input Text Styling */
  ${TextMediumCss}
  color: #fff;
`

export const PostsGrid = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding-bottom: 1rem;

  a, a:link, a:visited {
    all: unset;
    /* color: ${props => props.theme.colors.span} !important; */
    text-decoration: none;
  }
`

export const PostCard = styled.div`
  text-decoration: none;
  height: 16.25rem;
  background: ${props => props.theme.colors.post};
  border-radius: 10px;
  padding: 2rem;

  > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h2 {
      color: ${props => props.theme.colors.title};
      max-width: 17.5rem;
    }
    
    span {
      color: ${props => props.theme.colors.span} !important;
    }
  }

  main {
    overflow: hidden;
    max-width: 22rem;
  }

  p {
    margin-top: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;  
  }
`
