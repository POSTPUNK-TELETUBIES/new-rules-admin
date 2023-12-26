import { Reports } from '../services/Reports'
import { Rules } from '../services/Rules'
import { axiosInstance } from '../services/axios'

export const rulesProvider = new Rules(axiosInstance)
export const reportsProvider = new Reports()
