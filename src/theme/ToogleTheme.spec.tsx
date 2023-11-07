import { describe, test, expect, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import ToogleTheme from './ToogleTheme'
import { ColorModeProvider } from './ColorModeProvider'
import { Paper, Typography } from '@mui/material'

describe('Button to toggle between light and dark theme', () => {
  beforeEach(() => {
    render(
      <ColorModeProvider>
        <ToogleTheme />
        <Paper data-testid='paper'>
          <Typography data-testid='typography'>Volver</Typography>
        </Paper>
      </ColorModeProvider>,
    )
  })

  afterEach(() => {
    cleanup()
  })

  test('The theme should initially be in dark mode', () => {
    const paperElement = screen.getByTestId('paper')
    const typographyElement = screen.getByTestId('typography')

    expect(window.getComputedStyle(paperElement).backgroundColor).toBe(
      'rgb(21, 21, 21)',
    )
    expect(window.getComputedStyle(typographyElement).color).toBe(
      'rgb(255, 255, 255)',
    )
  })

  test('When clicking the button, the theme should change to light mode', () => {
    const toggleButton = screen.getByTestId('DarkModeIcon')
    const paperElement = screen.getByTestId('paper')
    const typographyElement = screen.getByTestId('typography')

    fireEvent.click(toggleButton)

    expect(window.getComputedStyle(paperElement).backgroundColor).toBe(
      'rgb(255, 255, 255)',
    )
    expect(window.getComputedStyle(typographyElement).color).toBe(
      'rgba(0, 0, 0, 0.87)',
    )
  })

  test('When clicking the button again, the theme should switch back to dark mode', () => {
    const toggleButton = screen.getByTestId('DarkModeIcon')
    const paperElement = screen.getByTestId('paper')
    const typographyElement = screen.getByTestId('typography')

    fireEvent.dblClick(toggleButton)

    expect(window.getComputedStyle(paperElement).backgroundColor).toBe(
      'rgb(21, 21, 21)',
    )
    expect(window.getComputedStyle(typographyElement).color).toBe(
      'rgb(255, 255, 255)',
    )
  })
})
