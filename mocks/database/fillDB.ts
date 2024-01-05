import { createOneProposal } from '../factories/createOneProposal'
import { DB_MOCK } from './db'
import { createOneRule } from '../factories/createOneRule'
import { faker } from '@faker-js/faker'

export const fillDB = () => {
  const countRules = faker.number.int({ min: 15, max: 20 })

  Array.from({ length: countRules }, () => {
    const countProposals = faker.number.int({ min: 1, max: 5 })

    const history = Array.from({ length: countProposals }, () =>
      DB_MOCK.proposal.create(createOneProposal()),
    )

    const rule_base = createOneRule()

    DB_MOCK.rule.create({
      ...rule_base,
      history,
    })
  })
}
