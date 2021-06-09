import * as S from './styles'
import Logo from '../../components/Logo'
import Heading from '../../components/Heading'
import React from 'react'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.Banner>
      <S.BannerContent>
        <Logo id="banner" />
        <div>
          <Heading color="white" size="huge">
            As melhores palestras com os melhores preços você encontra aqui.
          </Heading>
          <S.SubTitle>
            <strong>BRAEvents</strong> compre seus ingressos com total
            segurança.
          </S.SubTitle>
        </div>
        <S.Footer>BRAEvents 2021 - Desafio proposto pela MBLabs</S.Footer>
      </S.BannerContent>
    </S.Banner>
    <S.Content>
      <S.ContentWrapper>
        <Logo color="black" size="large" id="content" />
        <Heading color="lightPurple" lineBottom>
          {title}
        </Heading>
        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth
