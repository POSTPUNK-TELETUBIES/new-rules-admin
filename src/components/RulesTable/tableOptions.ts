import {
  RuleSeverity,
  RuleStatus,
  RuleType,
  RuleLanguage,
} from '../../types/rule'

export const TABLE_LANGUAGES_OPTIONS: { text: string; value: RuleLanguage }[] =
  [
    { text: 'HTML', value: RuleLanguage.HTML },
    { text: 'CSS', value: RuleLanguage.CSS },
    { text: 'Javascript', value: RuleLanguage.Javascript },
    { text: 'PHP', value: RuleLanguage.PHP },
    { text: 'Python', value: RuleLanguage.Python },
    { text: 'Java', value: RuleLanguage.Java },
    { text: 'Go', value: RuleLanguage.Go },
    { text: 'Swift', value: RuleLanguage.Swift },
    { text: 'Kotlin', value: RuleLanguage.Kotlin },
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

export const TABLE_STATE_OPTIONS: { text: string; value: RuleStatus }[] = [
  { text: 'ACTIVADO', value: RuleStatus.ACTIVE },
  { text: 'DESACTIVADO', value: RuleStatus.INACTIVE },
]
