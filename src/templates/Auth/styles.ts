import styled, { css } from 'styled-components'
import * as HeadingStyles from 'components/Heading/styles'
import * as LogoStyles from 'components/Logo/styles'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;
  ${media.greaterThan('medium')`
    grid-template-columns:  1fr 1fr;
  `}
`

export const Banner = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-image: url(/img/auth.jpg);
    background-size: cover;
    background-position: center center;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};

    ${media.lessThan('medium')`
      display: none;
    `}

    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${theme.colors.black};
      opacity: 0.75;
    }
  `}
`
export const BannerContent = styled.div`
  ${({ theme }) => css`
    height: 100%;
    color: ${theme.colors.white};
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    position: relative;
    z-index: ${theme.layers.base};
  `}
`
export const SubTitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.weight.light};
    margin-top: ${theme.spacings.xxsmall};

    strong {
      color: ${theme.colors['purple.100']};
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.white};
  `}
`
export const Footer = styled.div`
  align-self: end;
`
export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;

    ${media.greaterThan('medium')`
        width: 36rem;

    `}

    ${LogoStyles.Wrapper} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }
    ${HeadingStyles.Wrapper} {
      margin-bottom: 0 auto ${theme.spacings.medium};
    }
  `}
`
