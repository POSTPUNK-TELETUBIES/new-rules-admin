import type { Meta, StoryObj } from '@storybook/react'
import SelectOptions from '../components/SelectOptions'
import PersonIcon from '@mui/icons-material/Person'
import LogoutIcon from '@mui/icons-material/Logout'
import SettingsIcon from '@mui/icons-material/Settings'
import HelpIcon from '@mui/icons-material/Help'
import ChatIcon from '@mui/icons-material/Chat'

const meta = {
  title: 'Components/SelectOptions',
  component: SelectOptions,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'text' },
    items: { control: 'array' },
  },
} satisfies Meta<typeof SelectOptions>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    icon: <PersonIcon />,
    items: [
      {
        icon: <HelpIcon />,
        text: 'Ayuda y soporte técnico',
        onClick: () => {},
      },
      {
        icon: <SettingsIcon />,
        text: 'Configuración y privacidad',
        onClick: () => {},
      },
      {
        icon: <ChatIcon />,
        text: 'Enviar comentarios',
        onClick: () => {},
      },
      {
        icon: <LogoutIcon />,
        text: 'Cerrar sesión',
        onClick: () => {},
      },
    ],
  },
}
