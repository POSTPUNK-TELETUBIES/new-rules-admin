import React, { useState } from 'react'

type Props = {
  title: string
  children: React.ReactNode
}

const Accordion = ({ title, children }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div>
        <h3>{title}</h3>
        <button onClick={() => setOpen(!open)}>{open ? 'Cerrar' : 'Abrir'}</button>
      </div>

      {open && <div>{children}</div>}
    </>
  )
}

export default Accordion
