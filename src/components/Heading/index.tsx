import React from 'react'
import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'purple.800' | 'white'
  size?: 'small' | 'medium' | 'huge'
  lineBottom?: boolean
}

const Heading = ({
  children,
  color = 'purple.800',
  size = 'small',
  lineBottom = false
}: HeadingProps) => (
  <S.Wrapper lineBottom={lineBottom} color={color} size={size}>
    {children}
  </S.Wrapper>
)

export default Heading
