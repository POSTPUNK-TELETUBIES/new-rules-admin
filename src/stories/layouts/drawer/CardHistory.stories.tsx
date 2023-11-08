import { Meta } from '@storybook/react';
import CardHistory, { CardHistoryProps } from '../../../components/Drawer/CardHistory';
import { HistoryAction } from "../../../components/data/history"; 

export default {
  title: 'CardHistory',
  component: CardHistory,
} as Meta;

export const userSuggestion = (args:CardHistoryProps) => <CardHistory {...args} />;

userSuggestion.args = {
  user: "Pedro Lopez",
  action: HistoryAction.ActivateRule,
  sustain: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod",
  time: "12:25 PM 12/Dic/2022",
};
