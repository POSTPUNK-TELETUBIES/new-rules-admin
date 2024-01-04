import { faker } from '@faker-js/faker'
import { ProposalDTO } from '../../src/types/proposal'
import { proposalActionValues } from '../database/arrayOfEnums'

export const createOneProposal = (): ProposalDTO => {
  return {
    id: faker.string.uuid(),
    user: faker.internet.email(),
    sustain: faker.lorem.sentence({ min: 10, max: 20 }),
    time: faker.date.past(),
    action: faker.helpers.arrayElement(proposalActionValues),
  }
}
