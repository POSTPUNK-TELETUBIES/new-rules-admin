import { ProposalDTO } from './proposal'
import { RuleSeverity, RuleType } from './ruleEnums'

export interface RuleDTO {
  id: string
  code: string
  rule: string
  type: RuleType
  severity: RuleSeverity
  is_active_sonarqube: boolean
  is_active_local: boolean
  date: Date
  history: ProposalDTO[]
}
