import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '@mui/material'
import DrawerSwitcher from '../../../components/organisms/Drawer/DrawerSwitcher'
import { ColorModeProvider } from '../../../theme/ColorModeProvider'
import { DrawerProvider } from '../../../components/organisms/Drawer/Drawercontext'

const meta = {
  title: 'molescules/DrawerSwitcher',
  component: DrawerSwitcher,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ColorModeProvider>
        <DrawerProvider>
          <Box component='body'>
            <Story />
          </Box>
        </DrawerProvider>
      </ColorModeProvider>
    ),
  ],
} satisfies Meta<typeof DrawerSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Active: Story = {}
