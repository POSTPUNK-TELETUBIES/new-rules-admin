import { Avatar, Chip, Paper, Typography } from '@mui/material'
import { HistoryAction } from "../../components/data/history"; 


export interface CardHistoryProps {
  user: string;
  action: HistoryAction;
  sustain: string;
  avatar: string;
}

const CardHistory = ({ user, action, sustain, avatar  }: CardHistoryProps) => (
  <Paper sx={{ p: 2 }}>
    <Avatar src={avatar} alt={user} />
    <Typography variant='subtitle1' fontWeight={'bold'}>
      {`${user}`}
    </Typography>
    <Chip
      label={action}
      color={action === HistoryAction.ActivateRule ? 'success' : 'error'}
      sx={{ marginTop: 1 }}
    />
    <Typography sx={{ marginTop: 1 }}>{sustain}</Typography>
  </Paper>
);

export default CardHistory;