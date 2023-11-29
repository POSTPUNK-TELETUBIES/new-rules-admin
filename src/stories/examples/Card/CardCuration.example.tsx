import {
  Avatar,
  Box,
  Button,
  Card,
  IconButton,
  Switch,
  TextField,
  Typography,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { useState } from 'react'

const schema = yup.object().shape({
  sustento: yup.string().required('Se requiere el sustento'),
})

export interface CardCurationProps {
  name: string
  avatar: string
  isActive: boolean
}

interface FormData {
  isActive: boolean
  sustento: string
}

const CardCuration = ({ name, avatar, isActive }: CardCurationProps) => {
  const [showSwitchAndSustento, setShowSwitchAndSustento] = useState(true)
  const { handleSubmit, control, setValue } = useForm<FormData>({
    Resolver: yupResolver(schema),
    defaultValues: {
      isActive: isActive,
    },
  })

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
    setShowSwitchAndSustento(false)
    setValue('sustento', data.sustento)
  }

  const handleEditClick = () => {
    setShowSwitchAndSustento(true);
  };
  
  return (
    <Card sx={{ minWidth: 300, p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Avatar src={avatar} alt={name} sx={{ textTransform: 'uppercase' }} />
        <IconButton aria-label='edit' onClick={handleEditClick}>
            <EditIcon />
        </IconButton>
      </Box>
      <Typography sx={{ mt: 1 }} variant='subtitle1' fontWeight={'bold'}>
        {`${name}`}
      </Typography>
      {showSwitchAndSustento && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='isActive'
            control={control}
            render={({ field }) => (
              <Switch
                {...field}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            )}
          />
          <br />
          <Controller
            name='sustento'
            control={control}
            defaultValue=''
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label='Sustento'
                sx={{ width: '350px', mt: 2 }}
                error={!!fieldState.error}
                helperText={fieldState.error ? fieldState.error.message : ''}
              />
            )}
          /> 
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}
          >
            <Button
              type='submit'
              variant='contained'
              sx={{ width: '100px', p: 1, mt: 2 }}
            >
              Guardar
            </Button>
          </Box>
        </form>
      )}
    </Card>
  )
}

export default CardCuration
