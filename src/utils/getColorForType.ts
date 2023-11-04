import { ChipProps } from '@mui/material'
import { RuleType } from '../types/ruleEnums'

const getColorToRuleType: Record<RuleType, ChipProps['color']> = {
  BUG: 'error',
  VULNERABILITY: 'warning',
  CODE_SMELL: 'success',
  SECURITY_HOTSPOT: 'info',
}

export default getColorToRuleType
