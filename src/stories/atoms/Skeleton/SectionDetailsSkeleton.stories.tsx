import type { Meta, StoryObj } from '@storybook/react'
import SectionDetailsSkeleton from '../../../components/skeletons/SectionDetailsSkeleton'
import { Box } from '@mui/material'

const meta = {
  title: 'atoms/Skeletons/SectionDetailsSkeleton',
  component: SectionDetailsSkeleton,
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
} satisfies Meta<typeof SectionDetailsSkeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Active: Story = {}
