import { Suspense, lazy, useContext } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import LinearProgress from '@mui/material/LinearProgress'
import { DrawerContext } from './Drawercontext'

const DrawerSwitcher = lazy(() => import('./DrawerSwitcher'))

const DrawerRules = () => {
  const { isOpenDrawer, setIsOpenDrawer } = useContext(DrawerContext)

  return (
    <Drawer
      anchor='right'
      open={isOpenDrawer}
      onClose={() => setIsOpenDrawer(false)}
    >
      <Box>
        <Suspense fallback={<LinearProgress />}>
          <DrawerSwitcher />
        </Suspense>
      </Box>
    </Drawer>
  )
}

export default DrawerRules
