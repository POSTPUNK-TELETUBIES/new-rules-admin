import { http } from 'msw'
import { ruleResolver } from '../resolvers/ruleResolver'
import { detailsResolver } from './../resolvers/detailsResolver'
import historyListResolver from '../resolvers/history/historyListResolver'
import historyAddResolver from '../resolvers/history/historyAddResolver'
import historyUpdateResolver from '../resolvers/history/historyUpdateResolver'

export const handlers = [
  http.get('/api/rules', ruleResolver),

  http.get('/api/details', detailsResolver),

  http.get('/api/history', historyListResolver),
  http.post('/api/history/:id', historyAddResolver),
  http.put('/api/history', historyUpdateResolver),
]
