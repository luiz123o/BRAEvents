import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps } from '.'

const wrapperModifiers = {
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
  ${({ theme, color, lineBottom }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xxlarge};
  `}
    ${lineBottom && wrapperModifiers.lineBottom(theme)}
  `}
`
