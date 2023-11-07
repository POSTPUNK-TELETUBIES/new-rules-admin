import { memo } from 'react'
import Chip from '@mui/material/Chip'
import CheckIcon from '@mui/icons-material/Check'
import NotInterestedIcon from '@mui/icons-material/NotInterested'

type Props = {
  isActive: boolean
}

const StateChip = ({ isActive }: Props) => {
  return (
    <Chip
      variant='outlined'
      size='small'
      label={isActive ? 'Activado' : 'Desactivado'}
      color={isActive ? 'success' : 'default'}
      icon={isActive ? <CheckIcon /> : <NotInterestedIcon />}
    />
  )
}

export default memo(StateChip)
