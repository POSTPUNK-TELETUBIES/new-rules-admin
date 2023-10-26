import { ButtonProps } from '@mui/material'
import { RuleType } from '../types/rule'

export const getColorToRuleType: Record<RuleType, ButtonProps['color']> = {
  BUG: 'error',
  VULNERABILITY: 'warning',
  CODE_SMELL: 'success',
  SECURITY_HOTSPOT: 'info',
}
