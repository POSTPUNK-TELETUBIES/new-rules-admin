import SectionDetails from '../../../components/Drawer/sectionDetails'
import SectionHistory from '../../../components/Drawer/SectionHistory'
import buildTabSwitcher from './buildTabSwitcher'
import { DrawerContext } from './Drawercontext'
import { useContext } from 'react'

const tabsOptions = {
  detail: {
    label: 'Detalles de la regla',
    bodyElement: <SectionDetails />,
  },
  curation: {
    label: 'Historial de propuestas',
    bodyElement: <SectionHistory />,
  },
}

const TabSwitcher = buildTabSwitcher(tabsOptions)

const DrawerSwitcher = () => {
  const { columnActive } = useContext(DrawerContext)

  return <TabSwitcher defaultTab={columnActive} />
}

export default DrawerSwitcher
