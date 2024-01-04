import { HttpResponse, ResponseResolver } from 'msw'
import { DB_MOCK } from '../database/db'

export const detailsResolver: ResponseResolver = ({ request }) => {
  const url = new URL(request.url)
  const id_rule = url.searchParams.get('id')

  const details = DB_MOCK.rule.findFirst({
    where: { id: { equals: id_rule } },
  })

  console.log('detailsResolver', details)

  return HttpResponse.json(
    {
      details,
    },
    {
      status: 200,
    },
  )
}
