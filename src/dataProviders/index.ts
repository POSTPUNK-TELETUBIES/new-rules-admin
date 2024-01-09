import { historyProvider, reportsProvider, ruleProvider } from '../modules'
import { AsynProviderNames } from '../types/providers'

export const providerNames = {
  [AsynProviderNames.RULE]: ruleProvider,
  [AsynProviderNames.REPORTS]: reportsProvider,
  [AsynProviderNames.HISTORY]: historyProvider,
}
