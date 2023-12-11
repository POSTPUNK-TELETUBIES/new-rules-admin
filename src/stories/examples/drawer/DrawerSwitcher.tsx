import buildTabSwitcher from './buildTabSwitcher'
import { DrawerContext } from './Drawercontext'
import { useContext } from 'react'

const tabsOptions = {
  detail: {
    label: 'Detalles de la regla',
    bodyElement: <div> Soy el cuerpo de los detalles de la regla</div>,
  },
  curation: {
    label: 'Historial de propuestas',
    bodyElement: <div>Soy el cuerpo del historial de propuestas</div>,
  },
}

const TabSwitcher = buildTabSwitcher(tabsOptions)

const DrawerSwitcher = () => {
  const { columnActive } = useContext(DrawerContext)

  return <TabSwitcher defaultTab={columnActive} />
}

export default DrawerSwitcher
