import { http } from 'msw'
import { ruleResolver } from '../resolvers/ruleResolver'
import historyListResolver from '../resolvers/history/historyListResolver'
import historyAddResolver from '../resolvers/history/historyAddResolver'
import historyUpdateResolver from '../resolvers/history/historyUpdateResolver'

export const handlers = [
  http.get('/api/rules', ruleResolver),

  http.get('/api/history', historyListResolver),
  http.get('/api/history/add', historyAddResolver),
  http.get('/api/history/update', historyUpdateResolver),
]
