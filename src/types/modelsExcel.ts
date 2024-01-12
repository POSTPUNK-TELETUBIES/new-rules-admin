export type StoredHistoryDTO = {
  user: string
  sustain: string
  time: Date
  ruleId: string | undefined
}

export type StoredRuleDTO = {
  id: string
  code: string
  rule: string
  is_active_sonarqube: boolean
  date: Date
}
