import { Skeleton, Stack } from '@mui/material'

const RowSkeleton = ({ height }: { height: string }) => (
  <Stack
    direction={'row'}
    spacing={2}
    width={'100%'}
    sx={{ overflow: 'hidden' }}
  >
    <Skeleton
      variant='rounded'
      height={height}
      width={'14%'}
      sx={{ minWidth: '185px' }}
    />
    <Skeleton
      variant='rounded'
      height={height}
      width={'28%'}
      sx={{ minWidth: '390px' }}
    />
    <Skeleton
      variant='rounded'
      height={height}
      width={'12%'}
      sx={{ minWidth: '165px' }}
    />
    <Skeleton
      variant='rounded'
      height={height}
      width={'12%'}
      sx={{ minWidth: '155px' }}
    />
    <Skeleton
      variant='rounded'
      height={height}
      width={'12%'}
      sx={{ minWidth: '172px' }}
    />
    <Skeleton variant='rounded' height={height} width={'17%'} />
  </Stack>
)

const RulesTableSkeleton = () => (
  <Stack spacing={2} p={2} overflow={'hidden'} width={'100%'}>
    <Stack direction={'row'} spacing={1} justifyContent={'space-between'}>
      <Skeleton variant='rounded' height={50} width={'300px'} />
      <Skeleton variant='rounded' height={50} width={'150px'} />
    </Stack>
    <RowSkeleton height={'80vh'} />
  </Stack>
)

export default RulesTableSkeleton
