import Dexie, { Table } from 'dexie'
import { StoredProposalDTO, StoredRuleDTO } from '../src/types/dexie'

export class MySubClassedDexie extends Dexie {
  histories!: Table<StoredProposalDTO, number>
  rules!: Table<StoredRuleDTO, number>

  constructor() {
    super('DashboarDB')
    this.version(3).stores({
      histories: '++id, user, sustain, time, ruleId',
      rules: '++id, id, code, rule, is_active_sonarqube, date',
    })
  }
}

export const dexieDB = new MySubClassedDexie()
