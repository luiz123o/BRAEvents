import styled, { css } from 'styled-components'

import * as TextFieldStyles from 'components/TextField/styles'
import * as ButtonStyles from 'components/Button/styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }
    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
    }
  `}
`

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors['purple.800']};
    text-decoration: none;
    text-align: right;
    &:hover {
      color: ${theme.colors['purple.500']};
    }
  `}
`

export const FormLink = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-align: left;

    a {
      position: relative;
      color: ${theme.colors['purple.100']};
      text-decoration: none;
      margin-left: ${theme.spacings.xsmall};
      border-bottom: 0.1rem solid ${theme.colors['purple.800']};
      transition: color, border, ${theme.transition.fast};
      &:hover {
        color: ${theme.colors['purple.800']};
        border-bottom: 0.1rem solid ${theme.colors['purple.100']};
      }
    }
  `}
`
