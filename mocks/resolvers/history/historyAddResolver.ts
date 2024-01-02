import { DB_MOCK } from '../../database/db'
import { HttpResponse, ResponseResolver } from 'msw'

const historyAddResolver: ResponseResolver = ({ request }) => {
  const url = new URL(request.url)
  const id = Number(url.searchParams.get('id') ?? 20)
  const proposalText = Number(url.searchParams.get('proposalText') ?? 0)

  const proposal = DB_MOCK.rule.update({
    where: {
      id: {
        equals: id,
      },
    },
    data: {
      history: {
        push: proposalText,
      },
    },
  })

  return HttpResponse.json(
    {
      proposal,
    },
    {
      status: 200,
    },
  )
}

export default historyAddResolver
