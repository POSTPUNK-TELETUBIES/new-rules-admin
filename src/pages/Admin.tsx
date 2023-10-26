import Box from '@mui/material/Box'
import { lazy } from 'react'

const RulesTable = lazy(() => import('../components/RulesTable'))

const Admin = () => {
  return (
    <Box component='main'>
      <RulesTable />
    </Box>
  )
}

export default Admin
