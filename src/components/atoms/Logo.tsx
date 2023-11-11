import Typography from '@mui/material/Typography'

interface Props {
  text: string
}

const Logo = ({ text = 'Pacifico' }: Props) => {
  return (
    <Typography
      variant='h5'
      component='h1'
      sx={{ flexGrow: 1 }}
      fontWeight={'bold'}
      color={'white'}
    >
      {text}
    </Typography>
  )
}

export default Logo
