import { RestContext } from 'msw'
import { RequestTypeMSW, ResponseTypeMSW } from '../../src/types/mswTypes'
import { DB_MOCK } from '../database/db'

export const getHistory = (
  req: RequestTypeMSW,
  res: ResponseTypeMSW,
  ctx: RestContext,
) => {
  const limit = Number(req.url.searchParams.get('limit')) || 20
  const offset = Number(req.url.searchParams.get('offset')) || 0
  const shouldUseCustomLimit = limit && offset
  const ruleId = req.params.ruleId

  const allHistory = shouldUseCustomLimit
    ? DB_MOCK.history.findMany({
        where: {
          ruleId: ruleId ? { equals: ruleId } : undefined,
        },
        take: limit,
        skip: offset,
      })
    : DB_MOCK.history.getAll()

  return res(ctx.status(200), ctx.json({ history: [...allHistory] }))
}
