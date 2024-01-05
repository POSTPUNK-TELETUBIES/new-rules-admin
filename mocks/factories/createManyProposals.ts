import { ProposalDTO } from '../../src/types/proposal'
import { createOneProposal } from './createOneProposal'

export const createManyProposals = (count?: number): ProposalDTO[] => {
  return Array.from({ length: count ?? 3 }, () => createOneProposal())
}
