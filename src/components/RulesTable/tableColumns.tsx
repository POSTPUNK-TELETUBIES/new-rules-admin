import ContentCopy from '@mui/icons-material/ContentCopy'
import { MRT_ColumnDef } from 'material-react-table'
import { getDateDifference } from '../../utils/getDateDifference'
import { Rule } from '../../types/rule'
import {
  TABLE_LANGUAGES_OPTIONS,
  TABLE_SEVERITY_OPTIONS,
  TABLE_STATE_OPTIONS,
  TABLE_TYPE_OPTIONS,
} from './tableOptions'
import StateChip from '../atoms/StateChip'
import TypeChip from '../atoms/TypeChip'

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
    Cell: ({ row }) => <TypeChip value={row.original.type} />,
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
    header: 'ESTADO',
    accessorKey: 'isActive',
    maxSize: 5,
    filterVariant: 'select',
    filterSelectOptions: TABLE_STATE_OPTIONS,
    enableColumnFilterModes: false,
    Cell: ({ row }) => <StateChip isActive={row.original.isActive} />,
    filterFn: (row, id, filterValue) => row.getValue(id) === filterValue,
  },
  {
    header: 'FECHA',
    accessorKey: 'date',
    accessorFn: (dataRow) => getDateDifference(dataRow.date),
    maxSize: 5,
    sortingFn: 'datetime',
    filterFn: 'contains',
  },
]
