import { StoredRuleDTO, obtenerHistorias, obtenerRules } from './dexieDB'

export type CombinedDataDTO = {
  ruleCode: string
  ruleRule: string
  ruleIsActiveSonarqube: boolean
  ruleDate: Date
  historyUser: string
  historySustain: string
  historyTime: Date
}

export async function obtenerDatosCombinados(): Promise<CombinedDataDTO[]> {
  try {
    const historias = await obtenerHistorias()
    const reglas = await obtenerRules()

    const reglasIndexadas: Record<string, StoredRuleDTO> = {}
    reglas.forEach((regla) => {
      reglasIndexadas[regla.id] = regla
    })

    const combinedData: CombinedDataDTO[] = []

    historias.forEach((historia) => {
      const rule = historia.ruleId ? reglasIndexadas[historia.ruleId] : null

      if (rule) {
        combinedData.push({
          ruleCode: rule.code,
          ruleRule: rule.rule,
          ruleIsActiveSonarqube: rule.is_active_sonarqube,
          ruleDate: rule.date,
          historyUser: historia.user,
          historySustain: historia.sustain,
          historyTime: historia.time,
        })
      }
    })
    return combinedData
  } catch (error) {
    console.error('Error al obtener datos combinados:', error)
    throw error
  }
}
