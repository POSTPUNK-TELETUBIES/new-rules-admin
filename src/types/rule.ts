export type RuleSeverity = 'INFO' | 'MINOR' | 'MAJOR' | 'CRITICAL' | 'BLOCKER'

export type RuleType =
  | 'BUG'
  | 'VULNERABILITY'
  | 'CODE_SMELL'
  | 'SECURITY_HOTSPOT'

export type RulesLanguages =
  | 'HTML'
  | 'CSS'
  | 'Javascript'
  | 'PHP'
  | 'Python'
  | 'Java'
  | 'ruby'
  | 'Go'
  | 'Swift'
  | 'Kotlin'

export type RuleStatus = 'ACTIVE' | 'DESACTIVE'

export interface Rule {
  id: string
  code: string
  language: RulesLanguages
  rule: string
  type: RuleType
  severity: RuleSeverity
  state: RuleStatus
  date: Date
}
