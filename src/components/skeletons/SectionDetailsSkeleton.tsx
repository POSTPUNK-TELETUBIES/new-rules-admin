import Stack from '@mui/material/Stack'
import { SkeletonProps } from '@mui/material/Skeleton'
import { Box } from '@mui/material'
import SkeletonContainer from './SkeletonContainer'

const skeletonHeaderItems: SkeletonProps[] = [
  {
    height: 30,
    width: 60,
  },
  {
    height: 30,
    width: 60,
  },
]

const skeletonBodyItems: SkeletonProps[] = [
  {
    height: 50,
  },
  {
    height: 30,
    width: 150,
  },
  {
    height: 500,
  },
]

const SectionDetailsSkeleton = () => (
  <Stack spacing={2}>
    <Box display='flex' justifyContent={'space-between'}>
      <Box display={'flex'} gap={2}>
        <SkeletonContainer items={skeletonHeaderItems} />
      </Box>
      <Box display={'flex'} gap={2}>
        <SkeletonContainer items={skeletonHeaderItems} />
      </Box>
    </Box>
    <SkeletonContainer items={skeletonBodyItems} />
  </Stack>
)

export default SectionDetailsSkeleton
