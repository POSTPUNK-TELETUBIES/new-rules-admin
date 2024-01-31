import type { Meta, StoryObj } from '@storybook/react'
import StateChip from '../../components/Chips/StateChip'

const meta = {
  title: 'atoms/StateChip',
  component: StateChip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof StateChip>

export default meta
type Story = StoryObj<typeof meta>

export const Active: Story = {
  args: {
    isActive: true,
  },
}

export const Inactive: Story = {
  args: {
    isActive: false,
  },
}
