import { memo, useContext } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'
import { ColorModeContext } from './ColorModeProvider'

const ToogleTheme = memo(() => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  return (
    <IconButton
      onClick={colorMode.toggleColorMode}
      color='inherit'
      title='Alternar tema claro/oscuro'
    >
      {theme.palette.mode === 'dark' ? (
        <DarkModeIcon fontSize='medium' sx={{ color: 'white' }} />
      ) : (
        <LightModeIcon fontSize='medium' sx={{ color: 'white' }} />
      )}
    </IconButton>
  )
})

export default ToogleTheme
