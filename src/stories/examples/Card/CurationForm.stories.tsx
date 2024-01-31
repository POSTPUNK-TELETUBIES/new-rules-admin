import type { Meta, StoryObj } from '@storybook/react';
import { CurationForm } from './CurationForm';

const meta = {
  title: 'Examples/Curation Form',
  component: CurationForm,
  parameters: {
    layout: 'centered'
  },

} satisfies Meta<typeof CurationForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  }
}

export const Active: Story = {
  args: {
    initialIsActive: true
  }
}

export const WithSwitch: Story = {
  args: {
    hasSwitch: true
  }
}