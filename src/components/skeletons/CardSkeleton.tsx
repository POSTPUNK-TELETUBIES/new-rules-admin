import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

export const CardHistorySkeleton = () => (
  <Stack>
    <Skeleton animation='wave' variant='circular' height={40} width={40} />
    <Skeleton animation='wave' variant='text' height={60} />
    <Skeleton animation='wave' variant='rounded' height={150} />
  </Stack>
)
