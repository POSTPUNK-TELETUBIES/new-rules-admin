import { getRulesHandlers } from './rules'
import { getHistoryHandlers } from './history'


export const registerHandlers  = (basePath = '/api')=>{
  return [
    ... getRulesHandlers(basePath + '/rules'),
    ... getHistoryHandlers(basePath + '/history')
  ]
}



