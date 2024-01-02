import { DB_MOCK } from './db'
import { RuleDTO } from '../../src/types/rule'
import { createOneRule } from '../creators/createOneRule'

export const seeds = () => {
  Array.from({ length: 100 }, () => {
    const rule: RuleDTO = createOneRule()

    DB_MOCK.rule.create(rule)

    // TODO: crear un historial para cada regla
    // DB_MOCK.
  })
}
