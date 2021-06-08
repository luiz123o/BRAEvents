import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/Abrir Menu/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /BRAEvents/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/Pesquisar/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Carrinho de compras/i)).toBeInTheDocument()
  })
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    //Selecionar menu
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })
    //Verificar se o menu está escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
    //Clicar no botão de abrir e verificar se abriu
    fireEvent.click(screen.getByLabelText(/Abrir Menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })
    //Clicar no botão de fechar e verificar se fechou
    fireEvent.click(screen.getByLabelText(/Fechar Menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })
  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByText(/Criar conta/i)).toBeInTheDocument()
  })
  it('should show wishlight and account when logged in', () => {
    renderWithTheme(<Menu username="BRAEvents" />)
    expect(screen.getByText(/Perfil/i)).toBeInTheDocument()
    expect(screen.getByText(/Favoritos/i)).toBeInTheDocument()
  })
})
