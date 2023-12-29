import { DB_MOCK } from './db'
import { RuleDTO } from '../../src/types/rule'
import { createOneRule } from '../creators/createOneRule'
import { HistoryDTO } from '../../src/types/history'
import { createOneHistory } from '../creators/createOneHistory'

export const seeds = () => {
  Array.from({ length: 5 }, () => {
    const rule: RuleDTO = createOneRule()
    DB_MOCK.rule.create(rule)
    Array.from({ length: 3 }, () => {
      const history: HistoryDTO = createOneHistory(rule)
      DB_MOCK.history.create(history)
    })
  })
}
