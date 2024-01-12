import { HistoryDTO } from '../../types/history'
import { RuleDTO } from '../../types/rule'
import { dexieDB } from './dexieDB'
import { StoredHistoryDTO, StoredRuleDTO } from '../../types/modelsExcel'

export async function addHistory(history: HistoryDTO): Promise<number> {
  const historyToStore: StoredHistoryDTO = {
    user: history.user,
    sustain: history.sustain,
    time: history.time,
    ruleId: history.ruleId,
  }

  return await dexieDB.histories.add(historyToStore)
}

export async function getHistory(): Promise<StoredHistoryDTO[]> {
  const storedStories = await dexieDB.histories.toArray()

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

  return await dexieDB.rules.add(ruleToStore)
}

export async function getRules(): Promise<StoredRuleDTO[]> {
  const storedRules = await dexieDB.rules.toArray()
  return storedRules
}

export async function cleanDataBase(): Promise<void> {
  await dexieDB.histories.clear()
  await dexieDB.rules.clear()
}
