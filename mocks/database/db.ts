import { seeds } from './seeds'
import { factory, primaryKey } from '@mswjs/data'

export const DB_MOCK = factory({
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
