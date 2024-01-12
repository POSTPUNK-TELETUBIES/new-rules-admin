import { createOneProposal } from '../factories/createOneProposal'
import { DB_MOCK } from './db'
import { createOneRule } from '../factories/createOneRule'
import { faker } from '@faker-js/faker'

export const fillDB = () => {
  const countRules = faker.number.int({ min: 15, max: 20 })

  Array.from({ length: countRules }, () => {
    const countProposals = faker.number.int({ min: 25, max: 30 })

    const rule_base = createOneRule()

    const history = Array.from({ length: countProposals }, () =>
      DB_MOCK.proposal.create({
        ...createOneProposal(),
        ruleId: rule_base.id,
      }),
    )

    DB_MOCK.rule.create({
      ...rule_base,
      history,
    })
  })
}
