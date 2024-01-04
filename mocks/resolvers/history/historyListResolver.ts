import { DB_MOCK } from '../../database/db'
import { HttpResponse, ResponseResolver } from 'msw'

const historyListResolver: ResponseResolver = ({ request }) => {
  const url = new URL(request.url)
  const id_rule = url.searchParams.get('id')

  const rule = DB_MOCK.rule.findFirst({
    where: {
      id: {
        equals: id_rule,
      },
    },
  })

  return HttpResponse.json(
    {
      history: rule?.history ?? [],
    },
    {
      status: 200,
    },
  )
}

export default historyListResolver
