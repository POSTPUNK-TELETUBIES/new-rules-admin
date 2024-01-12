import { ProposalDTO } from './proposal'
import { RuleDTO } from './rule'

export type StoredProposalDTO = Pick<
  ProposalDTO,
  'user' | 'sustain' | 'time' | 'ruleId'
>

export type StoredRuleDTO = Pick<
  RuleDTO,
  'id' | 'code' | 'rule' | 'is_active_sonarqube' | 'date'
>

export type ReportDataDTO = {
  rule_code: RuleDTO['code']
  rule_rule: RuleDTO['rule']
  rule_is_active_sonarqube: RuleDTO['is_active_sonarqube']
  rule_date: RuleDTO['date']

  history_user: ProposalDTO['user']
  history_sustain: ProposalDTO['sustain']
  history_time: ProposalDTO['time']
}
