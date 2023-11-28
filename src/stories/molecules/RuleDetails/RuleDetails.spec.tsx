import { render, screen } from '@testing-library/react'
import RuleDetails from './RuleDetails'
import { expect, test } from 'vitest'

test('RuleDetails', () => {
  test('is rendered correctly', () => {
    render(
      <RuleDetails
        type='type'
        severity='severity'
        isActive={true}
        subtitle='subtitle'
        htmlCode='<p>htmlCode</p>'
      />,
    )
    expect(screen.getByText('Severidad de la regla')).not.toBeNull()
    expect(screen.getByText('tipo de regla')).not.toBeNull()
    expect(screen.getByText('Activa')).not.toBeNull()
    expect(screen.getByText('subtitle')).not.toBeNull()
  })

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

  test('displays the severity and type chips correctly', () => {
    render(
      <RuleDetails
        type='type'
        severity='severity'
        isActive={true}
        subtitle='subtitle'
        htmlCode='<p>htmlCode</p>'
      />,
    )
    expect(screen.getByText('severity')).not.toBeNull()
    expect(screen.getByText('type')).not.toBeNull()
  })

  test('displays the status of the rule correctly', () => {
    render(
      <RuleDetails
        type='type'
        severity='severity'
        isActive={true}
        subtitle='subtitle'
        htmlCode='<p>htmlCode</p>'
      />,
    )
    expect(screen.getByText('Activa')).not.toBeNull()
  })

  test('displays the date correctly', () => {
    render(
      <RuleDetails
        type='type'
        severity='severity'
        isActive={true}
        subtitle='subtitle'
        htmlCode='<p>htmlCode</p>'
      />,
    )
    expect(screen.getByText(new Date().toLocaleDateString())).not.toBeNull()
  })

  test('displays the subtitle correctly', () => {
    render(
      <RuleDetails
        type='type'
        severity='severity'
        isActive={true}
        subtitle='subtitle'
        htmlCode='<p>htmlCode</p>'
      />,
    )
    expect(screen.getByText('subtitle')).not.toBeNull()
  })
})
