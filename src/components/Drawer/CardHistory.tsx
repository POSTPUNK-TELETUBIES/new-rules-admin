import { Avatar, Chip, Paper, Typography } from '@mui/material'
import { HistoryAction } from '../../types/history'

export interface CardHistoryProps {
  user: string
  action: HistoryAction
  sustain: string
  avatar: string
}

const CardHistory = ({ user, action, sustain, avatar }: CardHistoryProps) => (
  <Paper sx={{ p: 2, width: '20rem', height: 'auto' }}>
    <Avatar src={avatar} alt={user} />
    <Typography variant='subtitle1' fontWeight={'bold'}>
      {user}
    </Typography>
    <Chip
      label={action}
      color={action === HistoryAction.ActivateRule ? 'success' : 'error'}
      sx={{ marginTop: 1 }}
    />
    <Typography sx={{ marginTop: 1 }}>{sustain}</Typography>
  </Paper>
)

export default CardHistory
