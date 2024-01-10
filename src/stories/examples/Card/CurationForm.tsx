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
  initialValues?: Partial<CurationDTO>
  isEditing?: boolean
}

const ButtonSwitch = (
  hasSwitch: boolean = false,
  initialIsActive: boolean = false,
  isEditing: boolean = false,
) => {
  if (isEditing) {
    return 'Guardar'
  }

  const text = initialIsActive ? 'Desactivar' : 'Activar'

  return hasSwitch ? text : 'Guardar'
}

// TODO: Evaluar el agregar la capacidad de que este formulario también sirva para edición, no solo creación.

export const CurationForm = ({
  onSubmit = async () => Promise.resolve(undefined),
  hasSwitch,
  initialIsActive,
  initialValues,
  isEditing = false,
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
      <TextField
        multiline
        defaultValue = { initialValues?.explanation}
        {...register('explanation')}
        size='small'
        sx={{ mt: 2, mb: 1 }}
      />
      <Typography>{errors.explanation?.message}</Typography>
      <Box display='flex'>
        <Button type='submit'>
          {ButtonSwitch(hasSwitch, initialIsActive, isEditing)}
        </Button>
      </Box>
    </Box>
  )
}
