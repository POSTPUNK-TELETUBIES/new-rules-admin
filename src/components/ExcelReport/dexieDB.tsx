import Dexie from 'dexie'
import { HistoryDTO } from '../../types/history'
import { RuleDTO } from '../../types/rule'

export type StoredHistoryDTO = {
  user: string
  sustain: string
  time: Date
  ruleId: string | undefined
}

export type StoredRuleDTO = {
  id: string
  code: string
  rule: string
  is_active_sonarqube: boolean
  date: Date
}

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
export async function agregarHistoria(historia: HistoryDTO): Promise<number> {
  const historiaAAlmacenar: StoredHistoryDTO = {
    user: historia.user,
    sustain: historia.sustain,
    time: historia.time,
    ruleId: historia.ruleId,
  }

  return await db.historias.add(historiaAAlmacenar)
}

export async function obtenerHistorias(): Promise<StoredHistoryDTO[]> {
  const historiasAlmacenadas = await db.historias.toArray()

  const historiasMasRecientesPorRuleId: Record<string, StoredHistoryDTO> = {}
  historiasAlmacenadas.forEach((historia) => {
    const ruleId = historia.ruleId
    if (ruleId) {
      if (
        !historiasMasRecientesPorRuleId[ruleId] ||
        historia.time > historiasMasRecientesPorRuleId[ruleId].time
      ) {
        historiasMasRecientesPorRuleId[ruleId] = historia
      }
    }
  })

  const historiasMasRecientes = Object.values(historiasMasRecientesPorRuleId)
  return historiasMasRecientes
}

export async function agregarRule(rule: RuleDTO): Promise<number> {
  const ruleAAlmacenar: StoredRuleDTO = {
    id: rule.id,
    code: rule.code,
    rule: rule.rule,
    is_active_sonarqube: rule.is_active_sonarqube,
    date: rule.date,
  }

  return await db.rules.add(ruleAAlmacenar)
}

export async function obtenerRules(): Promise<StoredRuleDTO[]> {
  const rulesAlmacenadas = await db.rules.toArray()
  return rulesAlmacenadas
}

export async function limpiarBaseDeDatos(): Promise<void> {
  await db.historias.clear()
  await db.rules.clear()
}
