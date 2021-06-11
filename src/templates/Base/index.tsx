import { Container } from 'components/Container'

import Menu from 'components/Menu'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  //const [session, loading] = useSession()

  return (
    <S.Wrapper>
      <Container>
        <Menu username="luiz" />
      </Container>

      <S.Content>{children}</S.Content>

      <S.SectionFooter>
        <Container></Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}

export default Base
