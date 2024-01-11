import type { Meta, StoryObj } from '@storybook/react'
import { Box, Paper } from '@mui/material'
import RuleDetails from './RuleDetails'
import { createOneRule } from '../../../../mocks/factories/createOneRule'

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

const rule = { ...createOneRule(), history: [] }

export const Primary: Story = {
  args: {
    rule: rule,
  },
}
