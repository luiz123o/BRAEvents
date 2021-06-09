import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type CheckBoxProps = {
  onCheck?: (status: boolean) => void
  isChecked?: boolean
  label?: string
  labelFor?: string
  value?: string | ReadonlyArray<string> | number
  labelColor?: 'white' | 'purple.500'
} & InputHTMLAttributes<HTMLInputElement>

const CheckBox = ({
  label,
  labelFor = '',
  value,
  isChecked = false,
  labelColor = 'purple.500',
  onCheck,
  ...props
}: CheckBoxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    !!onCheck && onCheck(status)
  }

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        value={value}
        {...props}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}
export default CheckBox
