import styled, { css } from 'styled-components'
import { LogoProps } from './index'
import media from 'styled-media-query'

const wrapperModifies = {
  normal: () => css`
    width: 11rem;
    height: auto;
  `,
  large: () => css`
    width: 20rem;
    height: auto;
  `,
  hideOnMobile: () => css`
    ${media.lessThan(`medium`)`
    width: 5.8rem;
    height: auto;

    svg {
      pointer-events: none;
      width: 11rem;
      height: auto;
    }
    .text {
      display: none;
    }
  `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, hideOnMobile }) => css`
    color: ${theme.colors[color!]};
    ${!!size && wrapperModifies[size]}
    ${!!hideOnMobile && wrapperModifies.hideOnMobile}
  `}
`
