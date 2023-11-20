import Box from '@mui/material/Box'
import RulesTable from '../components/RulesTable'
import { DrawerProvider } from '../components/Drawer/Drawercontext'
import DrawerRules from '../components/Drawer'

const Admin = () => {
  return (
    <Box component='main'>
      <DrawerProvider>
        <RulesTable />
        <DrawerRules />
      </DrawerProvider>
    </Box>
  )
}

export default Admin
