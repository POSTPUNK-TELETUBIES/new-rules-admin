import buildTabSwitcher from './buildTabSwitcher'

const TabSwitcher = buildTabSwitcher({
  detail: {
    label: 'Detalles de la regla',
    bodyElement: <div> Soy el cuerpo de los detalles de la regla</div>,
  },
  curation: {
    label: 'Curacion de reglas',
    bodyElement: <div>Soy el cuerpo de la curacion</div>,
  },
})

const DrawerSwitcher = () => {
  return <TabSwitcher />
}

export default DrawerSwitcher
