import { DB_MOCK } from '../database/db'
import { rest } from 'msw'

export const handlers = [
  rest.get('/api/rules', (req, res, ctx) => {
    const limit = Number(req.url.searchParams.get('limit')) || 20
    const offset = Number(req.url.searchParams.get('offset')) || 0

    const shouldUseCustomLimit = limit && offset

    const allRules = shouldUseCustomLimit
      ? DB_MOCK.rule.findMany({
          take: limit,
          skip: offset,
        })
      : DB_MOCK.rule.getAll()

    return res(ctx.status(200), ctx.json({ rules: [...allRules] }))
  }),
]

// limit/take -> numero de elementos a devolver
// offset/skip -> numero de elementos a saltar
