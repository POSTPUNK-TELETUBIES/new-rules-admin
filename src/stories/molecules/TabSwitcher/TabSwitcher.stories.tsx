import type { Meta, StoryObj } from '@storybook/react'
import TabSwitcher from '../../../components/molecules/TabSwitcher'
import { ColorModeProvider } from '../../../theme/ColorModeProvider'
import { DrawerProvider } from '../../../components/organisms/Drawer/Drawercontext'
import { COLUMNS_EXAMPLE } from './columns'
import { Paper } from '@mui/material'

const meta = {
  title: 'molecules/TabSwitcher',
  component: TabSwitcher,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ColorModeProvider>
        <DrawerProvider>
          <Paper>
            <Story />
          </Paper>
        </DrawerProvider>
      </ColorModeProvider>
    ),
  ],
  args: {
    height: 400,
    sx: { backgroundColor: '#505050' },
  },
} satisfies Meta<typeof TabSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    items: COLUMNS_EXAMPLE.slice(0, 2),
    width: 600,
  },
}

export const Secondary: Story = {
  args: {
    items: COLUMNS_EXAMPLE.slice(0, 3),
    width: 700,
  },
}

export const Tertiary: Story = {
  args: {
    items: COLUMNS_EXAMPLE.slice(0, 4),
    width: 800,
  },
}

export const Quaternary: Story = {
  args: {
    items: COLUMNS_EXAMPLE.slice(0, 5),
    width: 900,
  },
}
