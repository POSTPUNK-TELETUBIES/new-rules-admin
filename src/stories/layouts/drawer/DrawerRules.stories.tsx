import type { Meta, StoryObj } from '@storybook/react'
import DrawerRules from '../../../components/Drawer/DrawerRules'

const meta = {
  title: 'Layouts/Drawer Rules',
  component: DrawerRules,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DrawerRules>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
}
