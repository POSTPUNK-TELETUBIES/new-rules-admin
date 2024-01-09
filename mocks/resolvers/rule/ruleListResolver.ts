import { HttpResponse } from 'msw'
import { DB_MOCK } from '../../database/db'
import { ResponseResolverMSW } from '../../../src/types/msw'

export const ruleListResolver: ResponseResolverMSW = ({ request }) => {
  const url = new URL(request.url)
  const limit = Number(url.searchParams.get('limit') ?? 20)
  const offset = Number(url.searchParams.get('offset') ?? 0)

  const shouldUseCustomLimit = limit && offset

  const allRules = shouldUseCustomLimit
    ? DB_MOCK.rule.findMany({
        take: limit,
        skip: offset,
      })
    : DB_MOCK.rule.getAll()

  return HttpResponse.json(
    {
      rules: [...allRules],
    },
    {
      status: 200,
    },
  )
}
