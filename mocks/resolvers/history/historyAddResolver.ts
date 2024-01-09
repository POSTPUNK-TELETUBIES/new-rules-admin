import { ProposalDTO } from '../../../src/types/proposal'
import { DB_MOCK } from '../../database/db'
import { HttpResponse } from 'msw'
import { createOneProposal } from '../../factories/createOneProposal'
import { ResponseResolverMSW } from '../../../src/types/msw'

const historyAddResolver: ResponseResolverMSW = async ({ request, params }) => {
  const ruleId = params.ruleId

  const payload = (await request.json()) as Pick<
    ProposalDTO,
    'user' | 'sustain' | 'time' | 'action'
  >

  const proposalBase = createOneProposal()

  const proposal = DB_MOCK.proposal.create({
    ...proposalBase,
    ...payload,
    rule: ruleId,
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
