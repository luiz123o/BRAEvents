import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-twotone'
import Button from '.'

describe('<Button />', () => {
  it('should render the medium button default', () => {
    const { container } = renderWithTheme(<Button>Compre já</Button>)

    expect(screen.getByRole('button', { name: /Compre já/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Compre já</Button>)

    expect(screen.getByRole('button', { name: /Compre já/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })
  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Compre já</Button>)

    expect(screen.getByRole('button', { name: /Compre já/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem'
    })
  })
  it('should render fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Compre já</Button>)

    expect(screen.getByRole('button', { name: /Compre já/i })).toHaveStyle({
      width: '100%'
    })
  })
  it('should render an icon version', () => {
    renderWithTheme(
      <Button fullWidth icon={<AddShoppingCart data-testid="icon" />}>
        Compre já
      </Button>
    )

    expect(screen.getByText(/Compre já/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
  it('should render Button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Compre já
      </Button>
    )

    expect(screen.getByRole('link', { name: /Compre já/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
  it('should render a minimal version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Compre já
      </Button>
    )

    expect(screen.getByRole('button', { name: /Compre já/i })).toHaveStyle({
      background: 'none',
      color: '#7B95DE'
    })

    expect(screen.getByRole('button', { name: /Compre já/i })).toHaveStyleRule(
      'background',
      'none',
      {
        modifier: ':hover'
      }
    )
  })
})
