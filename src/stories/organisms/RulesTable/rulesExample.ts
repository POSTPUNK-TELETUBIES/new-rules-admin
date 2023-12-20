import { createOneRule } from '../../../../mocks/creators/createOneRule'
import { RuleDTO } from '../../../types/rule'

export const rulesExample: RuleDTO[] = Array.from({ length: 100 }, () => {
  const rule: RuleDTO = createOneRule()
  return rule
})
