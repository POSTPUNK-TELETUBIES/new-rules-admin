import ContentCopy from '@mui/icons-material/ContentCopy'
import Chip from '@mui/material/Chip'
import CheckIcon from '@mui/icons-material/Check'
import NotInterestedIcon from '@mui/icons-material/NotInterested'
import Button from '@mui/material/Button'
import { MRT_ColumnDef } from 'material-react-table'
import { getDateDifference } from '../../utils/getDateDifference'
import { getColorToRuleType } from '../../utils/getColorForType'
import { Rule } from '../../types/rule'
import {
  TABLE_LANGUAGES_OPTIONS,
  TABLE_SEVERITY_OPTIONS,
  TABLE_STATE_OPTIONS,
  TABLE_TYPE_OPTIONS,
} from './tableOptions'

export const columns: MRT_ColumnDef<Rule>[] = [
  {
    header: 'CÓDIGO',
    accessorKey: 'code',
    maxSize: 10,
    filterVariant: 'select',
    filterSelectOptions: TABLE_LANGUAGES_OPTIONS,
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
    accessorKey: 'rule',
    minSize: 400,
    enableColumnFilterModes: true,
    filterFn: 'contains',
  },
  {
    header: 'TIPO',
    accessorKey: 'type',
    maxSize: 5,
    filterVariant: 'multi-select',
    filterSelectOptions: TABLE_TYPE_OPTIONS,
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
    filterSelectOptions: TABLE_SEVERITY_OPTIONS,
    enableColumnFilterModes: false,
  },
  {
    id: 'col-state',
    header: 'ESTADO',
    accessorKey: 'state',
    maxSize: 5,
    filterVariant: 'select',
    filterSelectOptions: TABLE_STATE_OPTIONS,
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
    Cell: ({ row }) => getDateDifference(row.original.date),
  },
]
