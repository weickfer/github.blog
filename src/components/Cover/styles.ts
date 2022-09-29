import styled from "styled-components";

type CoverContainerProps = {
  backgroundImg: string
}

export const CoverContainer = styled.div<CoverContainerProps>`
  width: 100%;
  height: 18.5rem;
  background: ${props => props.theme.colors.profile};
  background-image: url(${props => props.backgroundImg});
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
`