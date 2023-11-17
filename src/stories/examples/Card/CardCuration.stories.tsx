import type { Meta, StoryObj } from '@storybook/react';
import CardCuration from './CardCuration.example';

const meta = {
  title: 'Examples/Card Curation',
  component: CardCuration,
  parameters: {
    layout: 'centered'
  },

} satisfies Meta<typeof CardCuration>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: 'asda',
    avatar: 'wdes',
    isActive: true,
  }
}

export const Secondary: Story = {
  args: {
    name: 'asda',
    avatar: 'wdes',
    isActive: false,
  }
}