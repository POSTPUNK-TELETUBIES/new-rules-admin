// import { createOneRule } from './../creators/createOneRule'
import { ProposalDTO } from './../../src/types/proposal'
import { FactoryAPI } from '@mswjs/data/lib/glossary'
import { fillDB } from './fillDB'
import { factory, manyOf, primaryKey } from '@mswjs/data'
import { RuleDTO } from '../../src/types/rule'

type DB = FactoryAPI<{
  rule: Record<keyof RuleDTO, any>
  proposal: Record<keyof ProposalDTO, any>
}>

export const DB_MOCK: DB = factory({
  rule: {
    id: primaryKey(String),
    code: String,
    type: String,
    severity: String,
    rule: String,
    is_active_sonarqube: Boolean,
    is_active_local: Boolean,
    date: Date,
    description: String,
    history: manyOf('proposal'),
  },
  proposal: {
    id: primaryKey(String),
    user: String,
    sustain: String,
    time: Date,
    action: String,
  },
})

fillDB()
