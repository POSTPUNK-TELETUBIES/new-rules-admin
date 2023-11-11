import Box, { BoxProps } from '@mui/material/Box'
import { useTheme } from '@mui/material'
import { PropsWithChildren } from 'react'

interface Props extends BoxProps {
  logo: JSX.Element
}

const Header = ({ logo, children, ...rest }: PropsWithChildren<Props>) => {
  const theme = useTheme()

  return (
    <Box
      component={'header'}
      sx={{
        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      }}
      display={'flex'}
      flexGrow={1}
      justifyContent={'space-between'}
      alignItems={'center'}
      pl={2}
      pr={1}
      height={50}
      {...rest}
    >
      <Box>{logo}</Box>
      <Box>{children}</Box>
    </Box>
  )
}

export default Header
