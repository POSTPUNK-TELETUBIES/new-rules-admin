import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from 'yup'

export const loginFormSchema = object({
  username: string()
    .email('Ingresa un correo válido.')
    .required('El usuario es obligatorio'),
  password: string()
    .min(7, 'La contraseña debe tener al menos 7 caracteres')
    .required('La contraseña es obligatoria'),
})

export const resolverYup = yupResolver(loginFormSchema)
