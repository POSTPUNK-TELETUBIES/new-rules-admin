import { RuleLanguage, RuleSeverity, RuleType } from './ruleEnums'

export interface Rule {
  id: string
  language: RuleLanguage
  code: string
  rule: string
  type: RuleType
  severity: RuleSeverity
  isActive: boolean
  date: Date
}
