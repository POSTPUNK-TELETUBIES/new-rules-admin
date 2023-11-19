import SectionHistory from '../../components/Drawer/SectionHistory';
import { createHistory } from '../../../mocks/factories/dataHistory'
import type { Meta, StoryObj } from '@storybook/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const meta = {
  title: 'organisms/SectionHistory',
  component: SectionHistory,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
} satisfies Meta<typeof SectionHistory>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    data: createHistory(),
  },
}

