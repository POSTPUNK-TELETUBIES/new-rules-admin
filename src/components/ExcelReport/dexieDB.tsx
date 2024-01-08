import Dexie from 'dexie'
import { StoredHistoryDTO, StoredRuleDTO } from './models'

interface MyDatabase extends Dexie {
  historias: Dexie.Table<StoredHistoryDTO, number>
  rules: Dexie.Table<StoredRuleDTO, number>
}

const db = new Dexie('MiBaseDeDatos') as MyDatabase
db.version(3).stores({
  historias: '++id, user, sustain, time, ruleId',
  rules: '++id, id, code, rule, is_active_sonarqube, date',
})

export default db
