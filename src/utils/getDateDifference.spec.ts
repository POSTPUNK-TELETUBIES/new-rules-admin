import { expect, describe, it } from 'vitest'
import { getDateDifference } from './getDateDifference'
import { es } from 'date-fns/locale'

describe('getDateDifference', () => {
  it('should return a valid distance string for a date in the past', () => {
    const targetDate = new Date('2020-01-01')
    const compareDate = new Date('2023-11-02')
    const result = getDateDifference(targetDate, compareDate)

    expect(typeof result).to.be.a('string')
    expect(result).to.equal('hace casi 4 años')
  })

  it('should return a valid distance string for a date in the future', () => {
    const targetDate = new Date('2030-01-01')
    const compareDate = new Date('2023-12-02')
    const result = getDateDifference(targetDate, compareDate)

    expect(typeof result).to.be.a('string')
    expect(result).to.equal('en alrededor de 6 años')
  })

  it('should return a valid distance string for a string date', () => {
    const targetDate = '2022-01-01'
    const compareDate = '2022-09-02'
    const result = getDateDifference(targetDate, compareDate)

    expect(typeof result).to.be.a('string')
    expect(result).to.equal('hace 8 meses')
  })

  it('should return a valid distance string with the addSuffix option set to false', () => {
    const targetDate = new Date('2022-01-01')
    const compareDate = new Date('2010-05-02')
    const options = { addSuffix: false, locale: es }
    const result = getDateDifference(targetDate, compareDate, options)

    expect(typeof result).to.be.a('string')
    expect(result).to.equal('más de 11 años')
  })
})
