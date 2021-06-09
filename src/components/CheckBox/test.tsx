import { screen, waitFor } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import CheckBox from '.'

describe('<CheckBox />', () => {
  it('should render with label', () => {
    renderWithTheme(<CheckBox label="checkbox label" labelFor="check" />)

    // input a partir do papel / role
    expect(screen.getByRole('checkbox')).toBeInTheDocument()

    // input a partir da label associada
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()

    // label a partir do texto dela
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })

  it('should render without label', () => {
    renderWithTheme(<CheckBox />)

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })
  it('should render with purple label', () => {
    renderWithTheme(
      <CheckBox
        label="checkbox label"
        labelFor="check"
        labelColor="purple.500"
      />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: theme.colors['purple.500']
    })
  })
  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<CheckBox label="Checkbox" onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(true)
  })
  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<CheckBox label="Checkbox" onCheck={onCheck} isChecked />)

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(false)
  })
})
