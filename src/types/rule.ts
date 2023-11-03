import { RuleLanguage, RuleSeverity, RuleStatus, RuleType } from './ruleEnums'

export interface Rule {
  id: string
  language: RuleLanguage
  code: string
  rule: string
  type: RuleType
  severity: RuleSeverity
  state: RuleStatus
  date: Date
}
