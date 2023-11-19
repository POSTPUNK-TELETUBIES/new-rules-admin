import { Meta } from '@storybook/react';
import CardHistory, { CardHistoryProps } from '../../../components/Drawer/CardHistory';
import { createHistory } from '../../../../mocks/factories/dataHistory';

export default {
  title: 'layouts/CardHistory',
  component: CardHistory,
} as Meta;

const data = createHistory(5);

export const userCard = (_args: CardHistoryProps) => (
  <div>
    {data.map((item, index) => (
      <CardHistory key={index} {...item} />
    ))}
  </div>
);