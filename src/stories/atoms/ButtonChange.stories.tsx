import type { Meta, StoryObj } from '@storybook/react';
import ButtonChanges from '../../components/drawer/ButtonChanges';

const meta = {
  title: 'atoms/Button Changes',
  component: ButtonChanges,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  tags: ['autodocs'],

} satisfies Meta<typeof ButtonChanges>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  }
}