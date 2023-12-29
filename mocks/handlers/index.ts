import { rest } from 'msw'
import getRules from '../resolvers/getRules'
import getDetails from './../resolvers/getDetails'
import handleHistoryRequest from './apiHistoryHandler'

export const handlers = [
  rest.get('/api/rules', getRules),
  rest.get('/api/details', getDetails),
  rest.get('/api/history', handleHistoryRequest),
]
