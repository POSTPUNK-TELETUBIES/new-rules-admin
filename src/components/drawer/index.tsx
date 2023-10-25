import { Suspense, lazy, useContext } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import LinearProgress from '@mui/material/LinearProgress'
import { DrawerContext } from './DrawerContext'

const DrawerDivider = lazy(() => import('./DrawerDivider'))

const DrawerMain = () => {
  const { isOpenDrawer, setIsOpenDrawer } = useContext(DrawerContext)

  return (
    <Drawer
      anchor='right'
      open={isOpenDrawer}
      onClose={() => setIsOpenDrawer(false)}
    >
      <Box width={{ sx: '100%', md: '600px' }} maxWidth={'600px'}>
        <Suspense fallback={<LinearProgress />}>
          <DrawerDivider />
        </Suspense>
      </Box>
    </Drawer>
  )
}

export default DrawerMain
