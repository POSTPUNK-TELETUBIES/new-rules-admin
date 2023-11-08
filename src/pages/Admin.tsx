import Box from '@mui/material/Box'
import RulesTable from '../components/organisms/RulesTable'
import { DrawerProvider } from '../components/layouts/Drawercontext'
import DrawerRules from '../components/layouts/DrawerRules'

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
