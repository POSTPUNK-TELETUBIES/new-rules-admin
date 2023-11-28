import { cleanup, render, screen } from '@testing-library/react'
import RuleDetails from './RuleDetails'
import { afterEach, beforeEach, expect, test } from 'vitest'

test('RuleDetails', () => {
  beforeEach(() => {
    render(
      <RuleDetails
        type='type'
        severity='severity'
        isActive={true}
        subtitle='subtitle'
        htmlCode='<p>htmlCode</p>'
      />,
    )
  })

  afterEach(() => {
    cleanup()
  })

  test('is rendered correctly', () => {
    expect(screen.getByText('Severidad de la regla')).not.toBeNull()
    expect(screen.getByText('tipo de regla')).not.toBeNull()
    expect(screen.getByText('Activa')).not.toBeNull()
    expect(screen.getByText('subtitle')).not.toBeNull()
  })

  test('displays the severity and type chips correctly', () => {
    expect(screen.getByText('severity')).not.toBeNull()
    expect(screen.getByText('type')).not.toBeNull()
  })

  test('displays the status of the rule correctly', () => {
    expect(screen.getByText('Activa')).not.toBeNull()
  })

  test('displays the date correctly', () => {
    expect(screen.getByText(new Date().toLocaleDateString())).not.toBeNull()
  })

  test('displays the subtitle correctly', () => {
    expect(screen.getByText('subtitle')).not.toBeNull()
  })
})

test('RuleDetails iframe', () => {
  test('updates the content of the iframe when htmlCode changes', async () => {
    const { rerender } = render(
      <RuleDetails
        type='type'
        severity='severity'
        isActive={true}
        subtitle='subtitle'
        htmlCode='<p>htmlCode</p>'
      />,
    )
    expect(screen.getByText('htmlCode')).not.toBeNull()

    rerender(
      <RuleDetails
        type='type'
        severity='severity'
        isActive={true}
        subtitle='subtitle'
        htmlCode='<p>newHtmlCode</p>'
      />,
    )
    await screen.findByText('newHtmlCode')
  })
})
