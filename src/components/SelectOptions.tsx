import { MouseEvent, useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import IconButton from '@mui/material/IconButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'

export interface ItemOfSelector {
  icon: JSX.Element
  text: string
  onClick: () => void
}

interface Props {
  icon: JSX.Element
  items: ItemOfSelector[]
}

const SelectOptions = ({ icon, items }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton onClick={handleClick}>{icon}</IconButton>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {items.map((element) => (
          <MenuItem
            onClick={() => {
              element.onClick()
              setAnchorEl(null)
            }}
            key={crypto.randomUUID()}
          >
            <ListItemIcon>{element.icon}</ListItemIcon>
            <Typography variant='button' noWrap>
              {element.text}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default SelectOptions
