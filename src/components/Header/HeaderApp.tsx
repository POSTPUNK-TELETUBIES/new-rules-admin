import Header from './Header'
import ToogleTheme from '../../theme/ToogleTheme'
import SelectProposalOptions from './SelectProposalOptions'
import SelectProfileOptions from './SelectProfileOptions'
import { Typography } from '@mui/material'

const HeaderApp = () => {
  return (
    <Header
      logo={
        <Typography
          variant='h5'
          component='h1'
          sx={{ flexGrow: 1 }}
          fontWeight={'bold'}
          color={'white'}
        >
          Pacifico
        </Typography>
      }
    >
      <ToogleTheme />
      <SelectProposalOptions />
      <SelectProfileOptions />
    </Header>
  )
}

export default HeaderApp
