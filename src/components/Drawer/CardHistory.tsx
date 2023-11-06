import { Avatar, Chip, Paper, Typography } from '@mui/material'

interface Props {
  user: string
  action: string
  sustento: string
  time: string
}

const CardHistory = (props: Props) => {

  return (
    <Paper sx={{ p: 2 }}>
      <Avatar />
      <Typography variant='subtitle1' fontWeight={'bold'}>
        {props.user}
      </Typography>
      <Chip
        label={props.action}
        color={props.action === 'Activar regla' ? 'success' : 'error'}
        style={{ margin: '10px 0' }}
      />
      <Typography>{props.sustento}</Typography>
    </Paper>
  )
}

export default CardHistory