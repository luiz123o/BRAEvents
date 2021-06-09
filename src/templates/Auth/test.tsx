import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )

    // verifiquem se tem 2 logos
    expect(screen.getAllByRole('img', { name: /BRAEvents/i })).toHaveLength(2)

    // verifica se tem o heading principal do banner
    expect(
      screen.getByRole('heading', {
        name: /As melhores palestras com os melhores preços você encontra aqui./i
      })
    ).toBeInTheDocument()

    // verifica se tem o title do content
    expect(
      screen.getByRole('heading', { name: /auth title/i })
    ).toBeInTheDocument()

    // verifica se o children tá sendo renderizado
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
