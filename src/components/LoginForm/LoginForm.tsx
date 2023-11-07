import { Avatar, Box, Button, TextField } from '@mui/material'
import { FieldErrors, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { resolverYup } from '../../validations/LoginFormSchema'
import { useEffect } from 'react'
import { useSnackbar } from 'notistack'

export interface ILoginForm {
  username: string
  password: string
}

const LoginForm = () => {
  const { register, handleSubmit, formState } = useForm<ILoginForm>({
    resolver: resolverYup,
  })

  const navigate = useNavigate()

  const { errors } = formState
  const { enqueueSnackbar } = useSnackbar()

  const onSubmit = () => {
    navigate('/admin')
  }

  const showErrors = (errors: FieldErrors<ILoginForm>) => {
    for (const key in errors) {
      if (errors.hasOwnProperty(key)) {
        const errorMessage = errors[key as keyof ILoginForm]?.message
        const variant = errorMessage ? 'error' : 'default'
        enqueueSnackbar(errorMessage, {
          variant,
        })
      }
    }
  }

  useEffect(() => {
    showErrors(errors)
  }, [errors])

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onSubmit)}
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
