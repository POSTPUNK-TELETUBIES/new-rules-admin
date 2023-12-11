import Stack from '@mui/material/Stack'
import { SkeletonProps } from '@mui/material/Skeleton'
import SkeletonContainer from './SkeletonContainer'

const skeletonItems: SkeletonProps[] = [
  {
    height: 60,
  },
  {
    height: 560,
  },
]

const SectionHistorySkeleton = () => (
  <Stack spacing={2}>
    <SkeletonContainer items={skeletonItems} />
  </Stack>
)

export default SectionHistorySkeleton
