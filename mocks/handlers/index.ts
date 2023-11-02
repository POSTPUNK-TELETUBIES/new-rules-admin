import { rest } from 'msw'
import { createRules } from './../factories/createRules'

export const handlers = [
  rest.get('/api/rules', (req, res, ctx) => {
    const limit = Number(req.url.searchParams.get('limit')) || 20
    const offset = Number(req.url.searchParams.get('offset')) || 0

    const shouldUseCustomLimit = limit && offset
    const rules = shouldUseCustomLimit ? createRules(limit) : createRules(7000)

    return res(ctx.status(200), ctx.json({ rules }))
  }),
]
