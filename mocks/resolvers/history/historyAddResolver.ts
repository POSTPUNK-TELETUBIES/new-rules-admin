import { ProposalDTO } from '../../../src/types/proposal'
import { DB_MOCK } from '../../database/db'
import { HttpResponse, ResponseResolver } from 'msw'
import { createOneProposal } from '../../factories/createOneProposal'

const historyAddResolver: ResponseResolver = async ({ request }) => {
  const payload = (await request.json()) as Pick<
    ProposalDTO,
    'user' | 'sustain' | 'time' | 'action'
  >

  const proposalBase = createOneProposal()

  const proposal = DB_MOCK.proposal.create({
    ...proposalBase,
    ...payload,
  })

  return HttpResponse.json(
    {
      proposal: proposal,
    },
    {
      status: 200,
    },
  )
}

export default historyAddResolver
