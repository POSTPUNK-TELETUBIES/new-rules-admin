import { object, string } from 'yup'

const regExp = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).{8,}$/

export const loginFormSchema = object({
  username: string()
    .email('Ingresa un correo válido.')
    .required('El usuario es obligatorio'),
  password: string()
    .min(7, 'La contraseña debe tener al menos 7 caracteres')
    .matches(
      regExp,
      'La contraseña debe tener al menos una mayúscula, un número y un carácter especial',
    )
    .required('La contraseña es obligatoria'),
})
