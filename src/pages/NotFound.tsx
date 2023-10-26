import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'

const NotFound = () => {
  return (
    <Box
      component={'section'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      flexGrow={1}
      height={'90vh'}
      gap={4}
    >
      <Typography variant='h1' component='span' fontWeight='bold'>
        404
      </Typography>
      <Typography variant='h4' component='span' textAlign='center' color='gray'>
        ¡Ups! Ocurrio un error
      </Typography>
      <Link to='/login'>
        <Button variant='contained'>Volver</Button>
      </Link>
    </Box>
  )
}

export default NotFound
