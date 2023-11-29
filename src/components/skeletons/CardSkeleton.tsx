import { SkeletonProps } from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import SkeletonContainer from './SkeletonContainer'

const skeletonItems: SkeletonProps[] = [
  {
    variant: 'circular',
    height: 40,
    width: 40,
  },
  {
    variant: 'text',
    height: 60,
  },
  {
    variant: 'rounded',
    height: 150,
  },
]

export const CardHistorySkeleton = () => (
  <Stack>
    <SkeletonContainer items={skeletonItems} />
  </Stack>
)
