import Stack from '@mui/material/Stack'
import Skeleton from '@mui/material/Skeleton'

const SectionHistorySkeleton = () => (
  <Stack spacing={2}>
    <Skeleton animation='wave' variant='rounded' height={60} />
    <Skeleton animation='wave' variant='rounded' height={560} />
  </Stack>
)

export default SectionHistorySkeleton
