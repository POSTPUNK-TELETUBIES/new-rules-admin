import { setupWorker } from 'msw/browser'
import { registerHandlers } from './handlers'

export const worker = setupWorker(...registerHandlers())
