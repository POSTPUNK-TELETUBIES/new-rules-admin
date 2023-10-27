import Box from '@mui/material/Box'
import { Suspense, lazy } from 'react'
import RulesTableSkeleton from '../components/Skeletons/RulesTableSkeleton'

const RulesTable = lazy(() => import('../components/RulesTable'))

const Admin = () => {
  return (
    <Box component='main'>
      <Suspense fallback={<RulesTableSkeleton />}>
        <RulesTable />
      </Suspense>
    </Box>
  )
}

export default Admin
