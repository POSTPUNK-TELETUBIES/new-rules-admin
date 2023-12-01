import { Box, Button, Drawer, LinearProgress } from '@mui/material'
import { Suspense, useState } from 'react'
import { DrawerOptions } from './DrawerOptions'

export const DrawerRules = () => {
  const [isDrawerOptions, setIsDrawerOptions] = useState(false)

  const openDrawer = () => {
    setIsDrawerOptions(true)
  }

  const closeDrawer = () => {
    setIsDrawerOptions(false)
  }

  return (
    <>
      <Button onClick={openDrawer} >
        Abrir drawer
      </Button>
      <Drawer
        anchor='right'
        open={isDrawerOptions}
        onClose={closeDrawer}
      >
        <Box sx={{ width: '40rem' }}>
          <Suspense fallback={<LinearProgress />}>
            <DrawerOptions/>
          </Suspense>
        </Box>
      </Drawer>
    </>
  )
}