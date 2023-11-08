import type { Meta, StoryObj } from '@storybook/react'
import SectionHistorySkeleton from '../../../components/atoms/skeletons/SectionHistorySkeleton'
import { Box } from '@mui/material'

const meta = {
  title: 'atoms/Skeletons/SectionHistorySkeleton',
  component: SectionHistorySkeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box sx={{ width: '25rem' }}>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof SectionHistorySkeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Active: Story = {}
