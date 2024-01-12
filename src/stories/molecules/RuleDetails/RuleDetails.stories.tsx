import type { Meta, StoryObj } from '@storybook/react'
import { Box, Paper } from '@mui/material'
import RuleDetails from './RuleDetails'

const meta = {
  title: 'molecules/RuleDetails',
  component: RuleDetails,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Paper sx={{ width: 600, minHeight: 600 }}>
        <Box p={3}>
          <Story />
        </Box>
      </Paper>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof RuleDetails>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    type: 'BUG',
    severity: 'MAJOR',
    isActive: true,
    subtitle:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum alias illum culpa sunt aliquid id, optio rem ab sint at!',
    htmlCode: `<h1 style="color: red">jaen 🎉</h1><input type="search"><button>Buscar</button>`,
  },
}
