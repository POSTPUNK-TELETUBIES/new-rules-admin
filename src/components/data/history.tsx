
export enum HistoryAction {
    ActivateRule = 'Activate Rule',
    DeactivateRule = 'Deactivate Rule',
}

export type History = {
    avatar: any
    id: number
    user: string
    sustain: string
    time: Date
    action: HistoryAction;
}

