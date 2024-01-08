import { ProposalDTO } from '../../../src/types/proposal'
import { DB_MOCK } from '../../database/db'
import { HttpResponse } from 'msw'
import { createOneProposal } from '../../factories/createOneProposal'
import { MswArguments } from '../../../src/types/msw'

const historyAddResolver = async ({ request, params }: MswArguments) => {
  const ruleId = params.id

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
