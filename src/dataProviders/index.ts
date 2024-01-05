import { reportsProvider, rulesProvider } from '../modules'
import { AsyncProviderNames } from '../types/providers'

export const providerNames = {
  [AsyncProviderNames.RULES]: rulesProvider,
  [AsyncProviderNames.REPORTS]: reportsProvider,
}
