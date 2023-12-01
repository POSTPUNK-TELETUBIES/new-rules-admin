import type { Meta, StoryObj } from '@storybook/react';
import { DrawerRules } from './DrawerRules.example';

const meta = {
  title: 'Layouts/Drawer/Drawer Rules',
  component: DrawerRules,
  parameters: {
    layout: 'centered'
  },

} satisfies Meta<typeof DrawerRules>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  }
}