import axios from 'axios'
import { config } from '../config/config'

const BASE_URL = config.getEnv('BASE_URL')

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {},
})
