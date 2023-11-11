import Avatar from '@mui/material/Avatar'
import LogoutIcon from '@mui/icons-material/Logout'
import SelectOptions from '../../molecules/SelectOptions'

const SelectProfileOptions = () => {
  return (
    <SelectOptions
      icon={<Avatar sx={{ width: 30, height: 30 }} />}
      items={[
        {
          icon: <LogoutIcon />,
          text: 'Cerrar sesión',
          onClick: () => {},
        },
      ]}
    />
  )
}

export default SelectProfileOptions
