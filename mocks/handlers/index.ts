import { rest } from 'msw'
import { createRules } from './../factories/createRules'

export const handlers = [
  rest.get('/api/rules', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ rules: createRules(8000) }))
  }),
]
