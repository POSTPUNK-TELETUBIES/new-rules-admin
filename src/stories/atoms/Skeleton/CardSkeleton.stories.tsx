import type { Meta, StoryObj } from '@storybook/react'
import { CardHistorySkeleton } from '../../../components/atoms/skeletons/CardSkeleton'
import { Box } from '@mui/material'

const meta = {
  title: 'atoms/Skeletons/CardHistorySkeleton',
  component: CardHistorySkeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box sx={{ width: '18.75rem' }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof CardHistorySkeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Active: Story = {}
