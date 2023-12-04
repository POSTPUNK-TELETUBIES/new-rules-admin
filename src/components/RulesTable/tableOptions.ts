import { Rule } from '../../types/rule'
import { RuleLanguage, RuleSeverity, RuleType } from '../../types/ruleEnums'

export const TABLE_LANGUAGES_OPTIONS: { text: string; value: RuleLanguage }[] =
  [
    { text: 'HTML', value: RuleLanguage.HTML },
    { text: 'CSS', value: RuleLanguage.CSS },
    { text: 'Javascript', value: RuleLanguage.JAVASCRIPT },
    { text: 'PHP', value: RuleLanguage.PHP },
    { text: 'Python', value: RuleLanguage.PYTHON },
    { text: 'Java', value: RuleLanguage.JAVA },
    { text: 'Go', value: RuleLanguage.GO },
    { text: 'Swift', value: RuleLanguage.SWIFT },
    { text: 'Kotlin', value: RuleLanguage.KOTLIN },
  ]

export const TABLE_TYPE_OPTIONS: RuleType[] = [
  RuleType.BUG,
  RuleType.CODE_SMELL,
  RuleType.VULNERABILITY,
  RuleType.SECURITY_HOTSPOT,
]

export const TABLE_SEVERITY_OPTIONS: RuleSeverity[] = [
  RuleSeverity.INFO,
  RuleSeverity.MINOR,
  RuleSeverity.MAJOR,
  RuleSeverity.CRITICAL,
  RuleSeverity.BLOCKER,
]

export const TABLE_STATE_OPTIONS: { text: string; value: Rule['isActive'] }[] =
  [
    { text: 'ACTIVADO', value: true },
    { text: 'DESACTIVADO', value: false },
  ]
