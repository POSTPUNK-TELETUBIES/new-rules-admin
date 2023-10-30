export enum RuleSeverity {
  INFO = 'INFO',
  MINOR = 'MINOR',
  MAJOR = 'MAJOR',
  CRITICAL = 'CRITICAL',
  BLOCKER = 'BLOCKER',
}

export enum RuleType {
  BUG = 'BUG',
  VULNERABILITY = 'VULNERABILITY',
  CODE_SMELL = 'CODE_SMELL',
  SECURITY_HOTSPOT = 'SECURITY_HOTSPOT',
}

export enum RuleLanguage {
  HTML = 'html',
  CSS = 'css',
  Javascript = 'javascript',
  PHP = 'php',
  Python = 'python',
  Java = 'java',
  Ruby = 'ruby',
  Go = 'go',
  Swift = 'swift',
  Kotlin = 'kotlin',
}

export enum RuleStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

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
