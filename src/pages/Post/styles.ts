import styled from "styled-components";
import { TextMediumCss } from "../../styles/fonts";

export const PostContainer = styled.div`
  max-width: 56rem;
  padding: 0 1rem;
  margin: 0 auto;
`

export const PostInfo = styled.div`
  width: 100%;
  height: 10.5rem;
  border-radius: 10px;
  background: ${props => props.theme.colors.profile};
  padding: 2rem;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  header a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${props => props.theme.colors.blue};
  }

  header a img {
    width: 12px;
    height: 12px;
  }

  > h1 {
    margin-top: 1.25rem;
    color: ${props => props.theme.colors.title};
  }
`

export const PostDetails = styled.section`
  display: flex;
  margin-top: auto;
  flex-direction: row;
  gap: 2rem;

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

export const MarkdownContainer = styled.div`
  display: block;
  margin: 0 auto;
  white-space: pre-wrap;
  margin-top: 2.5rem;
  max-width: 50rem;

  p {
    ${TextMediumCss};
    color: ${props => props.theme.colors.text};
  }
  
  a {
    ${TextMediumCss};
    color: ${props => props.theme.colors.blue};
  }
`
