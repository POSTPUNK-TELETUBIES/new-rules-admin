import { faker } from '@faker-js/faker'
import { HistoryDTO } from '../../src/types/history'
import { historyActionValues } from '../database/arrayOfEnums'
import { RuleDTO } from '../../src/types/rule'

export const createOneHistory = (rule: RuleDTO): HistoryDTO => {
  const history: HistoryDTO = {
    id: faker.string.uuid(),
    user: faker.person.fullName(),
    sustain: faker.lorem.sentence({ min: 10, max: 20 }),
    time: faker.date.past(),
    action: faker.helpers.arrayElement(historyActionValues),
    avatar: faker.image.url(),
    ruleId: rule.id,
  }
  return history
}
