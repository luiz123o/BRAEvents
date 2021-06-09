import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps } from '.'

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    &::after {
      width: 3rem;
    }
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
    ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.xxlarge};
      `}
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `,
  lineBottom: (theme: DefaultTheme) => css`
    position: relative;
    padding-left: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.medium};

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1rem;
      width: 12rem;
      border-bottom: 0.3rem solid ${theme.colors.primary};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineBottom, size }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xxlarge};
  `}
    ${lineBottom && wrapperModifiers.lineBottom(theme)}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`
