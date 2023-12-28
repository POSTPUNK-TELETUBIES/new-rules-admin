import { FactoryAPI } from '@mswjs/data/lib/glossary'
import { seeds } from './seeds'
import { factory, primaryKey } from '@mswjs/data'
import { RuleDTO } from '../../src/types/rule'
import { HistoryDTO } from '../../src/types/history'

type DB = FactoryAPI<{
  rule: Record<keyof RuleDTO, any>
  history: Record<keyof HistoryDTO, any>
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
  },

  history: {
    avatar: String,
    id:primaryKey(String),
    user: String,
    sustain: String,
    time: Date,
    action: Number,
  }
})

seeds()
