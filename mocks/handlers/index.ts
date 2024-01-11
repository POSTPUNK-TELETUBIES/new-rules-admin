import { ruleListResolver } from './../resolvers/rule/ruleListResolver'
import { ruleResolver } from '../resolvers/rule/ruleResolver'
import { http } from 'msw'
import historyListResolver from '../resolvers/history/historyListResolver'
import historyAddResolver from '../resolvers/history/historyAddResolver'
import historyUpdateResolver from '../resolvers/history/historyUpdateResolver'

export const handlers = [
  http.get('/api/rule', ruleListResolver),
  http.get('/api/rule/:id', ruleResolver),

  http.get('/api/history', historyListResolver),
  http.post('/api/history/:ruleId', historyAddResolver),
  http.put('/api/history/:id', historyUpdateResolver),
]
