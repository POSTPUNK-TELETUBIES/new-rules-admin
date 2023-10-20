import { describe, expect, it } from 'vitest'
import { renderHook } from '@testing-library/react-hooks'
import { useCounter } from './useCounter'

describe('useCounter', () => {
  it('devuelve correctamente el valor inicial', () => {
    const { result } = renderHook(() => useCounter(0))
    expect(result.current.count).toBe(0)
  })

  it('Incrementa el contador correctamente', () => {
    const { result } = renderHook(() => useCounter(0))
    result.current.increment()
    expect(result.current.count).toBe(1)
    result.current.increment()
    expect(result.current.count).toBe(2)
  })

  it('DIsminuye el contadorcorrectamente', () => {
    const { result } = renderHook(() => useCounter(2))
    result.current.decrement()
    expect(result.current.count).toBe(1)
    result.current.decrement()
    expect(result.current.count).toBe(0)
  })
})
