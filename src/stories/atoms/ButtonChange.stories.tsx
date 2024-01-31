import type { Meta, StoryObj } from '@storybook/react'
import ButtonChanges from '../examples/drawer/ButtonChanges'

const meta = {
  title: 'atoms/Button Changes',
  component: ButtonChanges,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ButtonChanges>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
