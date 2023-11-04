import { memo } from 'react'
import Chip from '@mui/material/Chip'
import { RuleType } from '../../types/ruleEnums'
import getColorToRuleType from '../../utils/getColorForType'

type Props = {
  value: RuleType
}

const TypeChip = ({ value }: Props) => {
  return (
    <Chip
      size='small'
      variant='outlined'
      color={getColorToRuleType[value]}
      sx={{ borderRadius: 1 }}
      label={value}
    />
  )
}

export default memo(TypeChip)
