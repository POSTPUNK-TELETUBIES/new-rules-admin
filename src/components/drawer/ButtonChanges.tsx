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

interface ButtonProps {
  backgroundColor?: string;
  onClick?: () => void;
}

const ButtonChanges = ({
  backgroundColor,
  ...props
}: ButtonProps) => {
  
  const [showswitch, setshowswitch] = useState(false)

  const switchVisibility = () => {
    setshowswitch(!showswitch)
  }

  const boxStyle = {
    position: 'fixed',
    bottom: '80px',
    right: '80px',
    width: '350px',
    background: '#fff',
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  }

  const buttonStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  }

  const fabStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
  }

  return (
    <>
      <Fab
        type="button"
        style={{ backgroundColor }}
        {...props}
        sx={fabStyle}
        color='primary'
        aria-label='add'
        onClick={switchVisibility}
      >
        <AddIcon />
      </Fab>
      {showswitch && (
        <Box sx={boxStyle}>
          <FormControl>
            <RadioGroup
              aria-labelledby='demo-radio-buttons-group-label'
              defaultValue='female'
              name='radio-buttons-group'
            >
              <FormControlLabel
                value='activar'
                control={<Radio />}
                label='Activar regla'
              />
              <FormControlLabel
                value='desactivar'
                control={<Radio />}
                label='Desactivar regla'
              />
            </RadioGroup>

            <TextField
              hiddenLabel
              id='filled-hidden-label-normal'
              variant='outlined'
              label='Sustento'
              sx={{ width: '350px', mt: 2 }}
            />

            <div style={buttonStyle}>
              <Button variant='contained' sx={{ width: '100px', p: 1, mt: 2 }}>
                Guardar
              </Button>
            </div>
          </FormControl>
        </Box>
      )}
    </>
  )
}

export default ButtonChanges
