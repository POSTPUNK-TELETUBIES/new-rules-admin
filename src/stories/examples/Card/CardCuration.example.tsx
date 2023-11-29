import {
  Avatar,
  Box,
  Card,
  Typography,
} from '@mui/material'
import { CurationForm } from './CurationForm.example'
export interface CardCurationProps {
  name: string
  avatar: string
  isActive: boolean
}

const CardCuration = ({ name, avatar }: CardCurationProps) => {
  
  return (
    <Card sx={{ minWidth: 300, p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Avatar src={avatar} alt={name} sx={{ textTransform: 'uppercase' }} />
      </Box>
      <Typography sx={{ mt: 1 }} variant='subtitle1' fontWeight={'bold'}>
        {`${name}`}
      </Typography>
      <CurationForm/>
    </Card>
  )
}

export default CardCuration
