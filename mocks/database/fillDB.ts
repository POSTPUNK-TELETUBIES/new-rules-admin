import { createOneProposal } from '../creators/createOneProposal'
import { DB_MOCK } from './db'
import { createOneRule } from '../creators/createOneRule'

export const fillDB = () => {
  Array.from({ length: 10 }, () => {
    const history = Array.from({ length: 4 }, () =>
      DB_MOCK.proposal.create(createOneProposal()),
    )

    const rule_base = createOneRule()

    const rule = DB_MOCK.rule.create({
      ...rule_base,
      history,
    })

    console.log(rule)
  })
}
