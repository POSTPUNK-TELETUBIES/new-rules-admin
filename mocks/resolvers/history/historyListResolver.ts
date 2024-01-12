import { ResponseResolverMSW } from '../../../src/types/msw'
import { DB_MOCK } from '../../database/db'
import { HttpResponse } from 'msw'

const historyListResolver: ResponseResolverMSW = ({ request }) => {
  const url = new URL(request.url)
  const ruleId = url.searchParams.get('id')
  const limit = Number(url.searchParams.get('limit') ?? 20)
  const offset = Number(url.searchParams.get('offset') ?? 0)

  const shouldUseCustomLimit = limit && offset

  const history = shouldUseCustomLimit
    ? DB_MOCK.proposal.findMany({
        where: {
          ruleId: { equals: ruleId },
        },
        take: limit,
        skip: offset,
      })
    : DB_MOCK.proposal.findMany({
        where: {
          ruleId: { equals: ruleId },
        },
      })

  return HttpResponse.json(
    {
      history: history,
    },
    {
      status: 200,
    },
  )
}

export default historyListResolver
