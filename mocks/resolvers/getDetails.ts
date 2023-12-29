import { RestContext } from 'msw'
import { DB_MOCK } from '../database/db'
import { RequestTypeMSW, ResponseTypeMSW } from '../../src/types/mswTypes'

const getDetails = (
  req: RequestTypeMSW,
  res: ResponseTypeMSW,
  ctx: RestContext,
) => {
  const id_rule = req.url.searchParams.get('id')
  const details = DB_MOCK.rule.findFirst({
    where: { id: { equals: id_rule } },
  })

  return res(ctx.status(200), ctx.json({ details }))
}

export default getDetails
