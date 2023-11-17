import ContentCopy from '@mui/icons-material/ContentCopy'
import { MRT_ColumnDef } from 'material-react-table'
import {
  TABLE_LANGUAGES_OPTIONS,
  TABLE_SEVERITY_OPTIONS,
  TABLE_STATE_OPTIONS,
  TABLE_TYPE_OPTIONS,
} from './tableOptions'
import { RuleDTO } from '../../../types/rule'
import TypeChip from '../../atoms/TypeChip'
import StateChip from '../../atoms/StateChip'
import { getDateDifference } from '../../../utils/getDateDifference'

export const columns: MRT_ColumnDef<RuleDTO>[] = [
  {
    header: 'CÓDIGO',
    accessorKey: 'code',
    maxSize: 0,
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
    minSize: 320,
    enableColumnFilterModes: true,
    filterFn: 'contains',
  },
  {
    header: 'TIPO',
    accessorKey: 'type',
    maxSize: 0,
    filterVariant: 'multi-select',
    filterSelectOptions: TABLE_TYPE_OPTIONS,
    enableColumnFilterModes: false,
    Cell: ({ row }) => <TypeChip value={row.original.type} />,
  },
  {
    header: 'SEVERIDAD',
    accessorKey: 'severity',
    maxSize: 0,
    filterVariant: 'multi-select',
    filterSelectOptions: TABLE_SEVERITY_OPTIONS,
    enableColumnFilterModes: false,
  },
  {
    header: 'EST. SONARQUBE',
    accessorKey: 'is_active_sonarqube',
    maxSize: 0,
    filterVariant: 'select',
    filterSelectOptions: TABLE_STATE_OPTIONS,
    enableColumnFilterModes: false,
    Cell: ({ row }) => (
      <StateChip isActive={row.original.is_active_sonarqube} />
    ),
    filterFn: (row, id, filterValue) => row.getValue(id) === filterValue,
  },
  {
    header: 'EST. PROPUESTO',
    accessorKey: 'is_active_local',
    maxSize: 0,
    filterVariant: 'select',
    filterSelectOptions: TABLE_STATE_OPTIONS,
    enableColumnFilterModes: false,
    Cell: ({ row }) => <StateChip isActive={row.original.is_active_local} />,
    filterFn: (row, id, filterValue) => row.getValue(id) === filterValue,
  },
  {
    header: 'FECHA',
    accessorKey: 'date',
    accessorFn: (dataRow) => getDateDifference(dataRow.date),
    maxSize: 0,
    sortingFn: 'datetime',
    filterFn: 'contains',
  },
]
