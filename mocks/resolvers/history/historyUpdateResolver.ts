import { HttpResponse } from 'msw'
import { DB_MOCK } from '../../database/db'
import { MswArguments } from '../../../src/types/msw'

const historyUpdateResolver = async ({ request, params }: MswArguments) => {
  const id = params.id
  const payload = (await request.json()) as { explanation: string }

  const proposal = DB_MOCK.proposal.update({
    where: {
      id: {
        equals: id,
      },
    },
    data: {
      sustain: payload.explanation,
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
