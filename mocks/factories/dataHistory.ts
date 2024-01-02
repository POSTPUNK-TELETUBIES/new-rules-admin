import { faker } from '@faker-js/faker'
import { ProposalAction, ProposalDTO } from '../../src/types/proposal'

export const createHistory = (count?: number): ProposalDTO[] => {
  return Array.from({ length: count ?? 3 }, (_, index) => ({
    id: index + 1,
    user: faker.person.fullName(),
    sustain: faker.lorem.sentence({ min: 10, max: 20 }),
    time: faker.date.past(),
    action:
      index % 2 === 0
        ? ProposalAction.ActivateRule
        : ProposalAction.DeactivateRule,
    avatar: faker.number.int({ min: 1, max: 2 }).toString(),
  }))
}
