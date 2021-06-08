import React from 'react'
import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'lightPurple' | 'black'
  lineBottom?: boolean
}

const Heading = ({
  children,
  color = 'lightPurple',
  lineBottom = false
}: HeadingProps) => (
  <S.Wrapper lineBottom={lineBottom} color={color}>
    {children}
  </S.Wrapper>
)

export default Heading
