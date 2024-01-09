import { HttpResponse } from 'msw'
import { DB_MOCK } from '../../database/db'
import { ResponseResolverMSW } from '../../../src/types/msw'

export const ruleResolver: ResponseResolverMSW = ({ params }) => {
  const ruleId = params.id

  const rule = DB_MOCK.rule.findFirst({
    where: { id: { equals: ruleId } },
  })

  return HttpResponse.json(
    {
      rule,
    },
    {
      status: 200,
    },
  )
}
