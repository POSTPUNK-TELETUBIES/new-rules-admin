import { createHistory } from '../../../mocks/factories/dataHistory'
import type { Meta, StoryObj } from '@storybook/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TimelineSection from '../../components/Drawer/TimelineComponent';
import { Order } from '../../components/Drawer/historyUtils';

const queryClient = new QueryClient();

const meta = {
  title: 'organisms/TimelineSection',
  component: TimelineSection,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
} satisfies Meta<typeof TimelineSection>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    sortedHistory: createHistory(),
    order:Order.Ascending,

  },
}

