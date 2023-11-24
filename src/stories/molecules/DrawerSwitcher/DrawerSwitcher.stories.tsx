import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '@mui/material'
import { ColorModeProvider } from '../../../theme/ColorModeProvider'
import ExampleComponent from './ComponentExample'

const meta = {
  title: 'molescules/DrawerSwitcher',
  component: ExampleComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box component='body'>
        <ColorModeProvider>
          <Story />
        </ColorModeProvider>
      </Box>
    ),
  ],
} satisfies Meta<typeof ExampleComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Active: Story = {
  args: {
    defaultTab: 'detail',
  },
}
