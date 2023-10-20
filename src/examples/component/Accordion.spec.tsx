import React from 'react'
import { describe, test, expect, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import Accordion from './Accordion'

describe('Accordion', () => {
  beforeEach(() => {
    render(
      <Accordion title='Los 3 cerditos'>
        <h3>descripcion breve</h3>
        <p>contenido completo</p>
      </Accordion>
    )
  })

  afterEach(() => {
    cleanup()
  })

  test('El acordeon debe estar cerrado por defecto', () => {
    expect(screen.queryByText(/descripcion breve/i)).toBeNull()
    expect(screen.queryByText(/contenido completo/i)).toBeNull()
  })

  test('Despues de hacer click encima, se debe abrir el acordeon', () => {
    const button = screen.getByText(/abrir/i)
    fireEvent.click(button)

    expect(screen.getByText(/descripcion breve/i)).toBeDefined()
    expect(screen.getByText(/contenido completo/i)).toBeDefined()
  })

  test('Despues de hacer doble click encima, el acordeon debe quedar cerrado ', () => {
    fireEvent.click(screen.getByText(/abrir/i))
    fireEvent.click(screen.getByText(/cerrar/i))

    expect(screen.queryByText(/descripcion breve/i)).toBeNull()
    expect(screen.queryByText(/contenido completo/i)).toBeNull()
  })
})
