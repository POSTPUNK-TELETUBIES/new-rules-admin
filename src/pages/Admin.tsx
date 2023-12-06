import { lazy } from 'react'
import Box from '@mui/material/Box'
import RulesTable from '../components/RulesTable'
import { DrawerProvider } from '../components/Drawer/Drawercontext'
import DrawerBase from '../components/Drawer'

const DrawerSwitcher = lazy(() => import('../components/Drawer/DrawerSwitcher'))

const Admin = () => {
  return (
    <Box component='main'>
      <DrawerProvider>
        <RulesTable />
        <DrawerBase>
          <DrawerSwitcher />
        </DrawerBase>
      </DrawerProvider>
    </Box>
  )
}

export default Admin
