import Skeleton, { SkeletonProps } from '@mui/material/Skeleton'
import { v4 as uuidv4 } from 'uuid'

interface SkeletonContainerProps {
  items: SkeletonProps[]
}

const SkeletonContainer = ({ items }: SkeletonContainerProps) => {
  return (
    <>
      {items.map((itemProps) => (
        <Skeleton variant='rounded' key={uuidv4()} {...itemProps} />
      ))}
    </>
  )
}

export default SkeletonContainer
