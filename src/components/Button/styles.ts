import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth'>

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
    display: inline-flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 1.5rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon }) => css`
    background: rgb(154, 131, 180);
    background: linear-gradient(
      180deg,
      rgba(154, 131, 180, 1) 0%,
      rgba(113, 107, 148, 1) 35%,
      rgba(123, 149, 222, 1) 93%
    );
    color: ${theme.colors.white};
    cursor: pointer;
    border: none;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};

    ${!!size && wrapperMatchModifiers[size](theme)};
    ${!!fullWidth && wrapperMatchModifiers.fullWidth()};
    ${!!hasIcon && wrapperMatchModifiers.withIcon(theme)}
  `}
`
