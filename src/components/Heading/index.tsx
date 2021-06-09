import React from 'react'
import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'lightPurple' | 'white'
  size?: 'small' | 'medium' | 'huge'
  lineBottom?: boolean
}

const Heading = ({
  children,
  color = 'lightPurple',
  size = 'medium',
  lineBottom = false
}: HeadingProps) => (
  <S.Wrapper lineBottom={lineBottom} color={color} size={size}>
    {children}
  </S.Wrapper>
)

export default Heading
