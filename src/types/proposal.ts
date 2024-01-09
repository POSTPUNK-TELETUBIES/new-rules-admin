export enum ProposalAction {
  ActivateRule = 'Activate Rule',
  DeactivateRule = 'Deactivate Rule',
}

export interface ProposalDTO {
  id: string
  user: string
  sustain: string
  time: Date
  action: ProposalAction
  avatar: string
  rule: string
}
