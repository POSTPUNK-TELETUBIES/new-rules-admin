import { Box, Button, Drawer, LinearProgress } from '@mui/material'
import { Suspense, lazy, useState } from 'react'

const DrawerOptions = lazy(() => import('./DrawerOptions'))

const DrawerRules = () => {
  const [isDrawerOptions, setIsDrawerOptions] = useState(false)

  // ABRIR EL DRAWER
  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOptions(open)
  }

  return (
    <>
      <Button onClick={toggleDrawer(true)} >
        Abrir drawer
      </Button>
      <Drawer
        anchor='right'
        open={isDrawerOptions}
        onClose={toggleDrawer(false)}
      >
        <Box sx={{ width: '600px' }}>
          <Suspense fallback={<LinearProgress />}>
            <DrawerOptions />
          </Suspense>
        </Box>
      </Drawer>
    </>
  )
}

export default DrawerRules
