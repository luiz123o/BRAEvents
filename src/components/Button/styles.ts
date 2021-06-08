import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal'>

const wrapperMatchModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};
    &:hover {
      transition: color 0.2s ease-in-out;
      color: ${theme.colors.secondary};
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background: rgb(180, 102, 200);
    background: linear-gradient(
      180deg,
      rgba(180, 102, 200, 1) 0%,
      rgba(136, 105, 224, 1) 93%
    );
    color: ${theme.colors.white};
    cursor: pointer;
    border: none;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};

    &:hover {
      transition: ${minimal ? 'none' : '0.4s'};
      background: ${minimal
        ? 'none'
        : `linear-gradient(180deg, #994cac 0%, #704ed0 100%)`};
    }

    ${!!size && wrapperMatchModifiers[size](theme)};
    ${!!fullWidth && wrapperMatchModifiers.fullWidth()};
    ${!!hasIcon && wrapperMatchModifiers.withIcon(theme)};
    ${!!minimal && wrapperMatchModifiers.minimal(theme)};
  `}
`
