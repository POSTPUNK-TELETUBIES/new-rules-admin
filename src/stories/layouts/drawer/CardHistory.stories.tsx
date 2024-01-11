import { Meta } from '@storybook/react'
import CardHistory, {
  CardHistoryProps,
} from '../../../components/Drawer/CardHistory'
import { createManyProposals } from '../../../../mocks/factories/createManyProposals'

export default {
  title: 'layouts/CardHistory',
  component: CardHistory,
} as Meta

const data = createManyProposals()

export const userCard = (_args: CardHistoryProps) => (
  <div>
    {data.map((item) => (
      <CardHistory key={item.id} {...item} />
    ))}
  </div>
)
