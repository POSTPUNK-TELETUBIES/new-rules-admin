import { historyProvider, reportsProvider, rulesProvider } from '../modules'
import { AsynProviderNames } from '../types/providers'

export const providerNames = {
  [AsynProviderNames.RULES]: rulesProvider,
  [AsynProviderNames.REPORTS]: reportsProvider,
  [AsynProviderNames.HISTORY]: historyProvider,
}
