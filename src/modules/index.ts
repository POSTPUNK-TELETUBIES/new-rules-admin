// import axios from 'axios'
import { Reports } from '../services/Reports'
import { Rules } from '../services/Rules'
import { axiosInstance } from '../services/axios'
import { HistoryService } from '../services/history'

// export const historyClient = axios.create({
//   baseURL: import.meta.env.VITE_API_HISTORY_URL,
// })

export const rulesProvider = new Rules(axiosInstance)
export const reportsProvider = new Reports()
export const historyProvider = new HistoryService(axiosInstance)
