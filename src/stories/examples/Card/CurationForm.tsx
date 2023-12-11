import {
  Box,
  BoxProps,
  Button,
  Switch,
  TextField,
  Typography,
} from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { resolver } from './CurationValidation'
import { CurationDTO } from './types'

export interface CurationFormProps extends Omit<BoxProps, 'onSubmit'> {
  onSubmit?: SubmitHandler<CurationDTO>
  hasSwitch?: boolean
  initialIsActive?: boolean
}

// TODO: Evaluar el agregar la capacidad de que este formulario también sirva para edición, no solo creación.

export const CurationForm = ({
  onSubmit = async () => Promise.resolve(undefined),
  hasSwitch,
  initialIsActive,
  ...boxProps
}: Readonly<CurationFormProps>) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CurationDTO>({ resolver })

  return (
    <Box {...boxProps} component={'form'} onSubmit={handleSubmit(onSubmit)}>
      {hasSwitch && (
        <Switch defaultChecked={initialIsActive} {...register('isActive')} />
      )}
      <TextField placeholder='sustento' {...register('explanation')} />
      <Typography>{errors.explanation?.message}</Typography>
      <Box display='flex'>
        <Button type='submit'>
          {hasSwitch ? 'Guardar' : initialIsActive ? 'Desactivar' : 'Activar'}
        </Button>
      </Box>
    </Box>
  )
}
