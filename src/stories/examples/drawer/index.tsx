import { PropsWithChildren, Suspense, useContext } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import LinearProgress from '@mui/material/LinearProgress'
import { DrawerContext } from './Drawercontext'

const DrawerBase = ({ children }: PropsWithChildren) => {
  const { isOpenDrawer, setIsOpenDrawer } = useContext(DrawerContext)

  return (
    <Drawer
      anchor='right'
      open={isOpenDrawer}
      onClose={() => setIsOpenDrawer(false)}
    >
      <Box width={1} maxWidth={700} minWidth={700}>
        <Suspense fallback={<LinearProgress />}>{children}</Suspense>
      </Box>
    </Drawer>
  )
}

export default DrawerBase
