import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'
import Heading from '.'

describe('<Heading />', () => {
  it('should render a lightPurple heading by default', () => {
    renderWithTheme(<Heading>BRAEvents</Heading>)

    expect(screen.getByRole('heading', { name: /BRAEvents/i })).toHaveStyle({
      color: '#9200FC'
    })
  })
  it('should render a  heading when is passed', () => {
    renderWithTheme(<Heading color="black">BRAEvents</Heading>)

    expect(screen.getByRole('heading', { name: /BRAEvents/i })).toHaveStyle({
      color: '#080A19'
    })
  })
  it('should render a heading with a line to the bottom side ', () => {
    renderWithTheme(<Heading lineBottom>BRAEvents</Heading>)

    expect(screen.getByRole('heading', { name: /BRAEvents/i })).toHaveStyleRule(
      'border-bottom',
      '0.3rem solid #7B95DE',
      { modifier: '::after' }
    )
  })
})
