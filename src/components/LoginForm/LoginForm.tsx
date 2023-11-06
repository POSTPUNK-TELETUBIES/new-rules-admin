import { Avatar, Box, Button, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { loginFormSchema } from '../../validations/LoginFormSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useSnackbar } from 'notistack'

export interface ILoginForm {
  username: string
  password: string
}

const LoginForm = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState } = useForm<ILoginForm>({
    resolver: yupResolver(loginFormSchema),
  })

  const { errors } = formState

  const { enqueueSnackbar } = useSnackbar()

  const onSubmit = () => {
    navigate('/admin')
  }

  useEffect(() => {
    if (errors.username || errors.password) {
      enqueueSnackbar(errors.username?.message ?? errors.password?.message, {
        variant: 'error',
      })
    }
  }, [errors])

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete='off'
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={1}
      height={'calc(100vh - 4rem)'}
    >
      <Avatar sx={{ width: '10rem', height: '10rem', marginBottom: '1rem' }} />
      <TextField
        {...register('username')}
        name='username'
        id='outlined-basic'
        label='Usuario'
        variant='outlined'
      />
      <TextField
        {...register('password')}
        name='password'
        type='password'
        id='filled-basic'
        label='Contraseña'
        variant='outlined'
      />
      <Button
        variant='contained'
        type='submit'
        sx={{ padding: '1rem', width: '14rem', marginTop: '1rem' }}
      >
        Ingresar
      </Button>
    </Box>
  )
}

export default LoginForm
