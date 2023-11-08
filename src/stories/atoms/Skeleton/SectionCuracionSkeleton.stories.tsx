import type { Meta, StoryObj } from '@storybook/react'
import SectionCuracionSkeleton from '../../../components/atoms/skeletons/SectionCuracionSkeleton'
import { Box } from '@mui/material'

const meta = {
  title: 'atoms/Skeletons/SectionCuracionSkeleton',
  component: SectionCuracionSkeleton,
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
} satisfies Meta<typeof SectionCuracionSkeleton>

export default meta
type Story = StoryObj<typeof meta>

export const Active: Story = {
  args: {},
}
