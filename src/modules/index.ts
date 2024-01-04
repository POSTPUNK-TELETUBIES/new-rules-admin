import { Reports } from '../services/Reports'
import { Rules } from '../services/Rules'
import { axiosInstance } from '../services/axios'
import { DetailsService } from '../services/details'
import { HistoryService } from '../services/history'

export const rulesProvider = new Rules(axiosInstance)
export const detailsProvider = new DetailsService(axiosInstance)
export const reportsProvider = new Reports()
export const historyProvider = new HistoryService(axiosInstance)
