import { RestContext } from 'msw'
import { DB_MOCK } from '../database/db'
import { RequestTypeMSW, ResponseTypeMSW } from '../../src/types/mswTypes'

const getRules = (
  req: RequestTypeMSW,
  res: ResponseTypeMSW,
  ctx: RestContext,
) => {
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
}

export default getRules
