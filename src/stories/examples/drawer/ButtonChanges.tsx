import {
  Box,
  Button,
  Fab,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'
import { boxStyle, buttonStyle, fabStyle } from './StylesButtonChanges'
import { stateRules } from '../../../utils/buttonChanges'

interface ButtonSaveProps {
  onClick?: () => void
}

export const ButtonChanges = ({ ...props }: ButtonSaveProps) => {
  const [showSwitch, setShowSwitch] = useState(false)

  const switchVisibility = () => {
    setShowSwitch(!showSwitch)
  }

  return (
    <>
      <Fab
        type='button'
        {...props}
        sx={fabStyle}
        color='primary'
        aria-label='add'
        onClick={switchVisibility}
      >
        <AddIcon />
      </Fab>
      {showSwitch && (
        <Box sx={boxStyle}>
          <FormControl>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              defaultValue='female'
              name='radio-buttons-group'
            >
              {stateRules.map((state) => (
                <FormControlLabel
                  key={state.label}
                  value={state.value}
                  control={<Radio />}
                  label={state.label}
                />
              ))}
            </RadioGroup>

            <TextField
              hiddenLabel
              id='filled-hidden-label-normal'
              variant='outlined'
              label='Sustento'
              sx={{ width: '350px', mt: 2 }}
            />

            <Box sx={buttonStyle}>
              <Button variant='contained' sx={{ width: '100px', p: 1, mt: 2 }}>
                Guardar
              </Button>
            </Box>
          </FormControl>
        </Box>
      )}
    </>
  )
}
