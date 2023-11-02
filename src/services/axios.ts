import axios from 'axios'
import { config } from '../config/config'

const API_URL = config.getEnv('API_URL')

export const axiosInstance = axios.create({
  url: API_URL,
  baseURL: 'api',
  headers: {},
})
