import { lazy } from 'react'
import Box from '@mui/material/Box'
import RulesTable from '../components/RulesTable'
import { DrawerProvider } from '../stories/examples/drawer/Drawercontext'
import DrawerBase from '../stories/examples/drawer'

const DrawerSwitcher = lazy(
  () => import('../stories/examples/drawer/DrawerSwitcher'),
)

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
