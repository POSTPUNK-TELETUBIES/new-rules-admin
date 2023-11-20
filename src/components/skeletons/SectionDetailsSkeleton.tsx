import Stack from '@mui/material/Stack'
import Skeleton from '@mui/material/Skeleton'

const SectionDetailsSkeleton = () => (
  <Stack spacing={2}>
    <Skeleton animation='wave' variant='rounded' height={200} />
    <Skeleton animation='wave' variant='rounded' height={200} />
    <Skeleton animation='wave' variant='rounded' height={200} />
  </Stack>
)

export default SectionDetailsSkeleton
