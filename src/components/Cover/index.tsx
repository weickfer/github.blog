import coverImg from '../../assets/cover.svg'
import logoImg from '../../assets/logo.svg'

import { CoverContainer } from "./styles";

export function Cover() {
  return (
    <CoverContainer backgroundImg={coverImg} >
      <img src={logoImg} />
    </CoverContainer>
  )
}