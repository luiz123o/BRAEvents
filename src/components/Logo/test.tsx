import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'
import Logo from '.'

describe('<Logo />', () => {
  it('should render a lightPurple label by default', () => {
    // renderizar o componente `render`
    renderWithTheme(<Logo />)
    // selecionar o elemento a ser testado`screen`(queries)
    //expect - assertion - análise

    expect(screen.getByLabelText(/BRAEvents/i).parentElement).toHaveStyle({
      color: '#9200FC'
    })
  })
  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)

    expect(screen.getByLabelText(/BRAEvents/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })
  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo size="normal" />)

    expect(screen.getByLabelText(/BRAEvents/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })
  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)

    expect(screen.getByLabelText(/BRAEvents/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />)

    expect(screen.getByLabelText(/BRAEvents/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width:768px)'
      }
    )
  })
})
