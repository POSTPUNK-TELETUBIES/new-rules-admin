import { ReactNode, Suspense, useContext } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import { DrawerContext } from './Drawercontext'
import SectionDetailsSkeleton from '../atoms/skeletons/SectionDetailsSkeleton'
import SectionCuracionSkeleton from '../atoms/skeletons/SectionCuracionSkeleton'
import SectionHistorySkeleton from '../atoms/skeletons/SectionHistorySkeleton'

const COLUMNS = [
  {
    order: 0,
    label: 'Detalles de la regla',
    component: <>Contenido de Detalles de la regla</>,
    Skeleton: <SectionDetailsSkeleton />,
  },
  {
    order: 1,
    label: 'Curación de la regla',
    component: <>Contenido de Curación de la regla</>,
    Skeleton: <SectionCuracionSkeleton />,
  },
  {
    order: 2,
    label: 'Historial de propuestas',
    component: <>Contenido de Historial de propuestas</>,
    Skeleton: <SectionHistorySkeleton />,
  },
]

interface TabPanelProps {
  children: ReactNode
  index: number
  columnActive: number
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, columnActive, index } = props

  return <>{columnActive === index && <Box sx={{ p: 3 }}>{children}</Box>}</>
}

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const DrawerOptions = () => {
  const { columnActive, setColumnActive } = useContext(DrawerContext)

  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position='static'>
        <Tabs
          value={columnActive}
          onChange={(_, newColumnValue) => setColumnActive(newColumnValue)}
          indicatorColor='secondary'
          textColor='inherit'
          variant='fullWidth'
        >
          <Tab label='Detalles de la regla' {...a11yProps(0)} />
          <Tab label='Curación de la regla' {...a11yProps(1)} />
          <Tab label='Historial de propuestas' {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      {COLUMNS.map((column) => (
        <CustomTabPanel
          columnActive={columnActive}
          index={column.order}
          key={column.order}
        >
          <Suspense fallback={column.Skeleton}>{column.component}</Suspense>
        </CustomTabPanel>
      ))}
    </Box>
  )
}

export default DrawerOptions
