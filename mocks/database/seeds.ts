import { DB_MOCK } from './db'
import { RuleDTO } from '../../src/types/rule'
import { generateOneRule } from '../generators/generateOneRule'

export const seeds = () => {
  Array.from({ length: 100 }, () => {
    const rule: RuleDTO = generateOneRule()

    DB_MOCK.rule.create(rule)
  })
}
