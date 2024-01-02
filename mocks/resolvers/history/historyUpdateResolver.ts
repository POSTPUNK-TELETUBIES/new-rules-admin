import { HttpResponse, ResponseResolver } from 'msw'
import { DB_MOCK } from '../../database/db'

const historyUpdateResolver: ResponseResolver = ({ request }) => {
  const url = new URL(request.url)
  const id = Number(url.searchParams.get('id') ?? 20)
  const proposalText = url.searchParams.get('proposalText')

  console.log(id, proposalText)

  const proposal = DB_MOCK.rule.update({
    where: {
      id: {
        equals: id,
      },
    },
    data: {
      history: {
        set: proposalText,
      },
    },
  })

  return HttpResponse.json(
    {
      proposal: {
        sustain: 'sustento ya modificado de ejemplo',
      },
    },
    {
      status: 200,
    },
  )
}

export default historyUpdateResolver
