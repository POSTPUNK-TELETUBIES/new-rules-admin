import type { Meta, StoryObj } from '@storybook/react'
import Header from '../../components/molecules/Header'
import { ColorModeProvider } from '../../theme/ColorModeProvider'
import { Box } from '@mui/material'

const meta = {
  title: 'molecules/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <ColorModeProvider>
        <Box width={720}>
          <Story />
        </Box>
      </ColorModeProvider>
    ),
  ],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
