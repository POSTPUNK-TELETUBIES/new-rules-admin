import { Suspense, useState, useRef } from 'react'
import ToogleTheme from '../../theme/ToogleTheme'
import MoreIcon from '@mui/icons-material/MoreVert'
import DeleteIcon from '@mui/icons-material/Delete'
import DownloadIcon from '@mui/icons-material/Download';
import {
  AppBar,
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const moreIconRef = useRef(null)

  const handleMoreIconClick = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen)
  }

  const handleClose = () => {
    setIsMenuOpen(false)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={(theme) => ({
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        })}
      >
        <Toolbar>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            PACIFICO
          </Typography>
          <Suspense>
            <ToogleTheme />
          </Suspense>
          <IconButton
            aria-label='display more actions'
            onClick={handleMoreIconClick}
            ref={moreIconRef}
          >
            <MoreIcon />
          </IconButton>
          <Menu
            anchorEl={moreIconRef.current}
            open={isMenuOpen}
            onClose={handleClose}
          >
            <MenuItem>
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              Revertir
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <DownloadIcon />
              </ListItemIcon>
              Descargar reportes
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
