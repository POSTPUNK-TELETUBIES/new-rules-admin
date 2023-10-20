import { describe, expect, it } from 'vitest'
import { fibonacci } from './fibonacci'

describe('fibonacci', () => {
  it('devuelve el valor correcto para entradas pequeñas', () => {
    expect(fibonacci(0)).toBe(0)
    expect(fibonacci(1)).toBe(1)
    expect(fibonacci(2)).toBe(1)
    expect(fibonacci(3)).toBe(2)
    expect(fibonacci(4)).toBe(3)
    expect(fibonacci(5)).toBe(5)
  })

  it('devuelve el valor correcto para entradas grandes', () => {
    expect(fibonacci(10)).toBe(55)
    expect(fibonacci(20)).toBe(6765)
    expect(fibonacci(30)).toBe(832040)
  })
})
