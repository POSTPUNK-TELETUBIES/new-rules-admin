import ContentCopy from '@mui/icons-material/ContentCopy'
import Chip from '@mui/material/Chip'
import CheckIcon from '@mui/icons-material/Check'
import NotInterestedIcon from '@mui/icons-material/NotInterested'
import Button from '@mui/material/Button'
import { MRT_ColumnDef } from 'material-react-table'
import { formatDate } from '../../utils/formatDate'
import { getColorToRuleType } from '../../helpers/getColorForType'
import {
  Rule,
  RuleSeverity,
  RuleStatus,
  RuleType,
  RulesLanguages,
} from '../../types/rule'

export const tableLanguageOptions: Array<
  string | { text: RulesLanguages; value: string }
> = [
  { text: 'HTML', value: 'html' },
  { text: 'CSS', value: 'css' },
  { text: 'Javascript', value: 'javascript' },
  { text: 'PHP', value: 'php' },
  { text: 'Python', value: 'python' },
  { text: 'Java', value: 'java' },
  { text: 'Go', value: 'go' },
  { text: 'Swift', value: 'swift' },
  { text: 'Kotlin', value: 'kotlin' },
]

const tableTypeOptions: RuleType[] = [
  'BUG',
  'CODE_SMELL',
  'VULNERABILITY',
  'SECURITY_HOTSPOT',
]

const tableSeverityOptions: RuleSeverity[] = [
  'INFO',
  'MINOR',
  'MAJOR',
  'CRITICAL',
  'BLOCKER',
]

const tableStateOptions: Array<string | { text: string; value: RuleStatus }> = [
  { text: 'ACTIVADO', value: 'ACTIVE' },
  { text: 'DESACTIVADO', value: 'DESACTIVE' },
]

export const columns: MRT_ColumnDef<Rule>[] = [
  {
    header: 'CÓDIGO',
    accessorKey: 'code',
    maxSize: 10,
    filterVariant: 'select',
    filterSelectOptions: tableLanguageOptions,
    filterFn: 'contains',
    enableClickToCopy: true,
    muiTableBodyCellCopyButtonProps: {
      fullWidth: true,
      startIcon: <ContentCopy style={{ color: '#8DD1F0' }} />,
      sx: { justifyContent: 'flex-start' },
    },
  },
  {
    header: 'REGLA',
    accessorKey: 'description',
    minSize: 400,
    enableColumnFilterModes: true,
    filterFn: 'contains',
  },
  {
    header: 'TIPO',
    accessorKey: 'type',
    maxSize: 5,
    filterVariant: 'multi-select',
    filterSelectOptions: tableTypeOptions,
    enableColumnFilterModes: false,
    Cell: ({ row }) => (
      <Button
        variant='outlined'
        size='small'
        color={getColorToRuleType[row.original.type]}
      >
        {row.original.type}
      </Button>
    ),
  },
  {
    header: 'SEVERIDAD',
    accessorKey: 'severity',
    maxSize: 5,
    filterVariant: 'multi-select',
    filterSelectOptions: tableSeverityOptions,
    enableColumnFilterModes: false,
  },
  {
    id: 'col-state',
    header: 'ESTADO',
    accessorKey: 'state',
    maxSize: 5,
    filterVariant: 'select',
    filterSelectOptions: tableStateOptions,
    enableColumnFilterModes: false,
    Cell: ({ row }) => (
      <Chip
        variant='outlined'
        label={row.original.state === 'ACTIVE' ? 'Activado' : 'Desactivado'}
        color={row.original.state === 'ACTIVE' ? 'success' : 'default'}
        size='small'
        icon={
          row.original.state === 'ACTIVE' ? (
            <CheckIcon />
          ) : (
            <NotInterestedIcon />
          )
        }
      />
    ),
  },
  {
    header: 'FECHA',
    accessorKey: 'date',
    maxSize: 5,
    sortingFn: 'datetime',
    filterFn: 'contains',
    Cell: ({ row }) => formatDate(row.original.date),
  },
]
