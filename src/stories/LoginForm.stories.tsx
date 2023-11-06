import { Meta, StoryObj } from '@storybook/react'
import LoginForm from '../components/LoginForm/LoginForm'
import { BrowserRouter as Router } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'

const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
  render: () => (
    <Router>
      <SnackbarProvider maxSnack={3}>
        <LoginForm />
      </SnackbarProvider>
    </Router>
  ),
  argTypes: {
    username: {
      description: 'El nombre de usuario para iniciar sesión.',
      control: {
        type: 'text',
      },
      defaultValue: {
        summary: 'admin@gmail.com',
      },
    },
    password: {
      description: 'La contraseña para iniciar sesión.',
      control: {
        type: 'text',
      },
      defaultValue: {
        summary: 'Password2023!',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
