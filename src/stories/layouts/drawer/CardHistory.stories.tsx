import { Meta } from '@storybook/react';
import CardHistory, { CardHistoryProps } from '../../../components/Drawer/CardHistory';
import { createHistory } from '../../../../mocks/factories/dataHistory';

export default {
  title: 'layouts/CardHistory',
  component: CardHistory,
} as Meta;

const data = createHistory();

export const userCard = (_args: CardHistoryProps) => (
  <div>
    {data.map((item) => (
      <CardHistory key={item.id} {...item} />
    ))}
  </div>
);