import { Suspense } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ToogleTheme from '../../theme/ToogleTheme'
import { useTheme } from '@mui/material'

export default function Header() {
  const theme = useTheme()

  return (
    <Box
      component={'header'}
      sx={{ flexGrow: 1 }}
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      p={0.5}
      pl={1}
      style={{
        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      }}
    >
      <Box>
        <Typography
          variant='h5'
          component='h1'
          sx={{ flexGrow: 1 }}
          fontWeight={'bold'}
          color={'white'}
        >
          Pacifico
        </Typography>
      </Box>
      <Box>
        <Suspense>
          <ToogleTheme />
        </Suspense>
      </Box>
    </Box>
  )
}
