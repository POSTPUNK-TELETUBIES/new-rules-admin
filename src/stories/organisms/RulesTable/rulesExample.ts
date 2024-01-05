import { createOneRule } from '../../../../mocks/factories/createOneRule'
import { RuleDTO } from '../../../types/rule'

export const rulesExample: RuleDTO[] = Array.from({ length: 100 }, () => {
  const rule: RuleDTO = { ...createOneRule(), history: [] }
  return rule
})
