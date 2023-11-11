import Logo from '../../atoms/Logo'
import Header from '../../molecules/Header'
import ToogleTheme from '../../../theme/ToogleTheme'
import SelectProposalOptions from './SelectProposalOptions'
import SelectProfileOptions from './SelectProfileOptions'

const HeaderApp = () => {
  return (
    <Header logo={<Logo text='Pacifico' />}>
      <ToogleTheme />
      <SelectProposalOptions />
      <SelectProfileOptions />
    </Header>
  )
}

export default HeaderApp
