import { rest } from 'msw'
import { createRules } from './../factories/createRules'

export const handlers = [
  rest.get('/rules', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ rules: createRules(10) }))
  }),
]
