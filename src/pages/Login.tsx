import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  return (
    <Box p={2} component='main'>
      <Button
        type='submit'
        variant='contained'
        color='primary'
        onClick={() => navigate('/admin')}
      >
        Iniciar Sesión
      </Button>
    </Box>
  )
}

export default Login
