import { Reports } from '../services/Reports'
import { RuleService } from '../services/Rule'
import { axiosInstance } from '../services/axios'
import { HistoryService } from '../services/history'

export const ruleProvider = new RuleService(axiosInstance)
export const reportsProvider = new Reports()
export const historyProvider = new HistoryService(axiosInstance)
