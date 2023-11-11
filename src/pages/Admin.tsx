import Box from '@mui/material/Box'
import RulesTable from '../components/organisms/RulesTable'
import { DrawerProvider } from '../components/organisms/Drawer/Drawercontext'
import DrawerRules from '../components/organisms/Drawer'

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
