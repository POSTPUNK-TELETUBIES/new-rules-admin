import { rest } from 'msw'
import { getRules } from './../resolvers/index'

export const handlers = [rest.get('/api/rules', getRules)]
