import { getHistory, getRules } from './databaseService'
import { ReportDataDTO, StoredRuleDTO } from '../src/types/dexie'

export async function getCombinedData(): Promise<ReportDataDTO[]> {
  try {
    const histories = await getHistory()
    const rules = await getRules()

    const indexRules: Record<string, StoredRuleDTO> = {}
    rules.forEach((rule) => {
      indexRules[rule.id] = rule
    })

    const combinedData: ReportDataDTO[] = []

    histories.forEach((history) => {
      const rule = history.ruleId ? indexRules[history.ruleId] : null

      if (rule) {
        combinedData.push({
          rule_code: rule.code,
          rule_rule: rule.rule,
          rule_is_active_sonarqube: rule.is_active_sonarqube,
          rule_date: rule.date,
          history_user: history.user,
          history_sustain: history.sustain,
          history_time: history.time,
        })
      }
    })
    return combinedData
  } catch (error) {
    console.error('Error al obtener datos combinados:', error)
    throw error
  }
}
