import { HttpResponse, ResponseResolver } from 'msw'
import { DB_MOCK } from '../../database/db'

const historyUpdateResolver: ResponseResolver = ({ request }) => {
  const url = new URL(request.url)
  const id = url.searchParams.get('id')
  const newText = url.searchParams.get('newText')

  const proposal = DB_MOCK.proposal.update({
    where: {
      id: {
        equals: id,
      },
    },
    data: {
      sustain: newText,
    },
  })

  return HttpResponse.json(
    {
      proposal: {
        sustain: proposal?.sustain,
      },
    },
    {
      status: 200,
    },
  )
}

export default historyUpdateResolver
