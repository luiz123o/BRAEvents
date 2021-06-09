import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from '.'

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>
type WrapperProps = Pick<TextFieldProps, 'error'>

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: none;
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors['purple.500']};
    margin-top: ${theme.spacings.xxsmall};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors['purple.500']};
    }
  `}
`
export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors['purple.100']};
    order: ${iconPosition === 'right' ? 1 : 0};
    & > svg {
      width: 100%;
    }
  `}
`

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.lightPurple};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    ::placeholder{
      color: ${theme.colors['purple.100']};
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors['purple.500']};
    cursor: pointer;
  `}
`
const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.error};
    }
    ${Icon},
    ${Label} {
      color: ${theme.colors.error};
    }
  `
}
export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error }) => css`
    ${error && wrapperModifiers.error(theme)}
  `}
`
