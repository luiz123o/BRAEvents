import styled, { css } from 'styled-components'
import { CheckBoxProps } from '.'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

type LabelProps = Pick<CheckBoxProps, 'labelColor'>

export const Label = styled.label<LabelProps>`
  ${({ theme, labelColor }) => css`
    cursor: pointer;
    padding-left: ${theme.spacings.xxsmall};
    line-height: 1;
    color: ${!!labelColor && theme.colors[labelColor]};
  `}
`
export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors['purple.500']};
    border-radius: 0.2rem;
    transition: background border ${theme.transition.fast};
    position: relative;
    outline: none;
    &:before {
      content: '';
      width: 0.6rem;
      height: 0.9rem;
      border: 0.2rem solid ${theme.colors['purple.500']};
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.1rem;
      opacity: 0;
      transition: ${theme.transition.fast};
    }
    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
    &:checked {
      border-color: ${theme.colors['purple.500']};
      background: ${theme.colors.white};
      &:before {
        opacity: 1;
      }
    }
  `}
`
