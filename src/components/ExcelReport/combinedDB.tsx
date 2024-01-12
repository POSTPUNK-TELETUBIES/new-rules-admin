import { getHistory, getRules } from './databaseService'
import { StoredRuleDTO } from './models'

export type CombinedDataDTO = {
  ruleCode: string
  ruleRule: string
  ruleIsActiveSonarqube: boolean
  ruleDate: Date
  historyUser: string
  historySustain: string
  historyTime: Date
}

export async function getCombinedData(): Promise<CombinedDataDTO[]> {
  try {
    const historias = await getHistory()
    const rules = await getRules()

    const indexRules: Record<string, StoredRuleDTO> = {}
    rules.forEach((rule) => {
      indexRules[rule.id] = rule
    })

    const combinedData: CombinedDataDTO[] = []

    historias.forEach((history) => {
      const rule = history.ruleId ? indexRules[history.ruleId] : null

      if (rule) {
        combinedData.push({
          ruleCode: rule.code,
          ruleRule: rule.rule,
          ruleIsActiveSonarqube: rule.is_active_sonarqube,
          ruleDate: rule.date,
          historyUser: history.user,
          historySustain: history.sustain,
          historyTime: history.time,
        })
      }
    })
    return combinedData
  } catch (error) {
    console.error('Error al obtener datos combinados:', error)
    throw error
  }
}
