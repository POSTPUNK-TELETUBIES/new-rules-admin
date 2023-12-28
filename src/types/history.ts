
export enum HistoryAction {
    ActivateRule = 'Activate Rule',
    DeactivateRule = 'Deactivate Rule',
}

export interface HistoryDTO  {
    avatar: string
    id: string
    user: string
    sustain: string
    time: Date
    action: HistoryAction;
}

