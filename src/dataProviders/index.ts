import {
  detailsProvider,
  historyProvider,
  reportsProvider,
  rulesProvider,
} from '../modules'
import { AsynProviderNames } from '../types/providers'

export const providerNames = {
  [AsynProviderNames.RULES]: rulesProvider,
  [AsynProviderNames.DETAILS]: detailsProvider,
  [AsynProviderNames.REPORTS]: reportsProvider,
  [AsynProviderNames.HISTORY]: historyProvider,
}
