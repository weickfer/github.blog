import styled from "styled-components"

type IconProps = {
  url: string
}

type ImgContainerProps = {
  
}

const ImgContainer = styled.img``

export function Icon({ url }: IconProps) {
  return <ImgContainer src={url} />
}