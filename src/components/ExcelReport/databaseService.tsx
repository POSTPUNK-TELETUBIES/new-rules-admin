import { HistoryDTO } from '../../types/history'
import { RuleDTO } from '../../types/rule'
import db from './dexieDB'
import { StoredHistoryDTO, StoredRuleDTO } from './models'

export async function addHistory(history: HistoryDTO): Promise<number> {
  const historyToStore: StoredHistoryDTO = {
    user: history.user,
    sustain: history.sustain,
    time: history.time,
    ruleId: history.ruleId,
  }

  return await db.historias.add(historyToStore)
}

export async function getHistory(): Promise<StoredHistoryDTO[]> {
  const storedStories = await db.historias.toArray()

  const recentHistory_ruleId: Record<string, StoredHistoryDTO> = {}
  storedStories.forEach((history) => {
    const ruleId = history.ruleId
    if (ruleId) {
      if (
        !recentHistory_ruleId[ruleId] ||
        history.time > recentHistory_ruleId[ruleId].time
      ) {
        recentHistory_ruleId[ruleId] = history
      }
    }
  })

  const recentHistory = Object.values(recentHistory_ruleId)
  return recentHistory
}

export async function addRule(rule: RuleDTO): Promise<number> {
  const ruleToStore: StoredRuleDTO = {
    id: rule.id,
    code: rule.code,
    rule: rule.rule,
    is_active_sonarqube: rule.is_active_sonarqube,
    date: rule.date,
  }

  return await db.rules.add(ruleToStore)
}

export async function getRules(): Promise<StoredRuleDTO[]> {
  const storedRules = await db.rules.toArray()
  return storedRules
}

export async function cleanDataBase(): Promise<void> {
  await db.historias.clear()
  await db.rules.clear()
}
