import { expect, test } from 'vitest'
import { getColorToRuleType } from './getColorForType'

test('BUG maps to error', () => {
  expect(getColorToRuleType['BUG']).to.be.equal('error')
})

test('VULNERABILITY maps to warning', () => {
  expect(getColorToRuleType['VULNERABILITY']).to.be.equal('warning')
})

test('CODE_SMELL maps to success', () => {
  expect(getColorToRuleType['CODE_SMELL']).to.be.equal('success')
})

test('SECURITY_HOTSPOT maps to info', () => {
  expect(getColorToRuleType['SECURITY_HOTSPOT']).to.be.equal('info')
})
