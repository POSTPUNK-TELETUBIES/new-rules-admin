import type { Meta, StoryObj } from '@storybook/react';
import DrawerRules from '../../examples/drawer/DrawerRules.example';

const meta = {
  title: 'Layouts/Drawer/Drawer Rules',
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
