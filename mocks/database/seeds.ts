import { DB_MOCK } from './db'
import { RuleDTO } from '../../src/types/rule'
import { createOneRule } from '../creators/createOneRule'
import { HistoryDTO } from '../../src/types/history'
import { createOneHistory } from '../creators/createOneHistory'
import {
  addHistory,
  addRule,
  cleanDataBase,
} from '../../src/components/ExcelReport/databaseService'

export const seeds = async () => {
  await cleanDataBase()

  Array.from({ length: 10 }, async () => {
    const rule: RuleDTO = createOneRule()
    DB_MOCK.rule.create(rule)
    await addRule(rule)
    Array.from({ length: 5 }, async () => {
      const history: HistoryDTO = createOneHistory(rule)
      DB_MOCK.history.create(history)
      await addHistory(history)
    })
  })
}
