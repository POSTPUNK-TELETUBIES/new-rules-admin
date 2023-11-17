import { FactoryAPI } from '@mswjs/data/lib/glossary'
import { seeds } from './seeds'
import { factory, primaryKey } from '@mswjs/data'
import { RuleDTO } from '../../src/types/rule'

type DB = FactoryAPI<{
  rule: Record<keyof RuleDTO, any>
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
})

// rellenar la DB
seeds()
