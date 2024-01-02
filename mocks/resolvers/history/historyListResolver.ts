import { createHistory } from '../../factories/dataHistory'
import { HttpResponse, ResponseResolver } from 'msw'

const historyListResolver: ResponseResolver = ({ request }) => {
  const url = new URL(request.url)
  const limit = Number(url.searchParams.get('limit') ?? 20)
  const offset = Number(url.searchParams.get('offset') ?? 0)

  const shouldUseCustomLimit = limit && offset
  const history = shouldUseCustomLimit
    ? createHistory(limit)
    : createHistory(20)

  return HttpResponse.json(
    {
      history,
    },
    {
      status: 200,
    },
  )
}

export default historyListResolver
