export enum ProposalAction {
  ActivateRule = 'Activate Rule',
  DeactivateRule = 'Deactivate Rule',
}

export interface ProposalDTO {
  id: number
  user: string
  sustain: string
  time: Date
  action: ProposalAction
}
