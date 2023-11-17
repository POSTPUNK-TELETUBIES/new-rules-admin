import {
  Avatar,
  Box,
  Button,
  Card,
  Switch,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'

export interface CardCurationProps {
  name: string
  avatar: string
  isActive: boolean
}

const CardCuration = ({ name, avatar, isActive }: CardCurationProps) => {
  const [checked, setChecked] = React.useState(isActive)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }
  return (
    <Card sx={{ minWidth: 300, p: 2 }}>
      <Avatar src={avatar} alt={name} sx={{textTransform: 'uppercase'}}/>
      <Typography sx={{ mt: 1 }} variant='subtitle1' fontWeight={'bold'}>
        {`${name}`}
      </Typography>
      <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
        name="gilad"
      />
      <br />
      <TextField
        id='filled-hidden-label-normal'
        variant='outlined'
        label='Sustento'
        sx={{ width: '350px', mt: 2 }}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}
      >
        <Button variant='contained' sx={{ width: '100px', p: 1, mt: 2 }}>
          Guardar
        </Button>
      </Box>
    </Card>
  )
}

export default CardCuration
