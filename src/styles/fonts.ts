import styled, { css } from "styled-components";

export const TitleLarge = styled.h1`
  font-family: 'Nunito', sans-serif;
  font-weight: ${props => props.theme.fonts["title-l"].fontWeight};
  font-size: ${props => props.theme.fonts['title-l'].fontSize};
`

export const TitleMedium = styled.h2`
  font-family: 'Nunito', sans-serif;
  font-weight: ${props => props.theme.fonts["title-m"].fontWeight};
  font-size: ${props => props.theme.fonts['title-m'].fontSize};
  line-height: 160%;
  `

export const TitleSmall = styled.h3`
  font-family: 'Nunito', sans-serif;
  font-weight: ${props => props.theme.fonts["title-s"].fontWeight};
  font-size: ${props => props.theme.fonts['title-s'].fontSize};
  line-height: 160%;
  `

export const TextMediumCss = css`
  font-family: 'Nunito', sans-serif;
  font-weight: ${props => props.theme.fonts["text-m"].fontWeight};
  font-size: ${props => props.theme.fonts['text-m'].fontSize};
  line-height: 160%;
  `

export const TextMedium = styled.p`${TextMediumCss}`

export const TextSmall = styled.span`
  font-family: 'Nunito', sans-serif;
  font-weight: ${props => props.theme.fonts["text-s"].fontWeight};
  font-size: ${props => props.theme.fonts['text-s'].fontSize};
  line-height: 160%;
  `

export const Link = styled.a`
  font-family: 'Nunito', sans-serif;
  font-weight: ${props => props.theme.fonts.link.fontWeight};
  font-size: ${props => props.theme.fonts.link.fontSize};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
