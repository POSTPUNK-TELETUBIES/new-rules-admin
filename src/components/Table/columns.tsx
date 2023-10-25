import { MRT_ColumnDef } from 'material-react-table'
import { Rule } from '../../types'
import ContentCopy from '@mui/icons-material/ContentCopy'
import Chip from '@mui/material/Chip'
import { Button } from '@mui/material'
import { getColorForType } from './helpers/getColorForType'
import CheckIcon from '@mui/icons-material/Check'
import NotInterestedIcon from '@mui/icons-material/NotInterested'
import { formatDate } from './helpers/formatDate'

export const columns: MRT_ColumnDef<Rule>[] = [
  {
    header: 'CÓDIGO',
    accessorKey: 'code',
    maxSize: 10,
    filterVariant: 'select', // indicar el tipo de selector de los filtros
    filterSelectOptions: [
      { text: 'HTML', value: 'html' },
      { text: 'CSS', value: 'css' },
      { text: 'Javascript', value: 'javascript' },
      { text: 'PHP', value: 'php' },
      { text: 'Python', value: 'python' },
      { text: 'Java', value: 'java' },
      { text: 'C#', value: 'csharp' },
      { text: 'C++', value: 'cpp' },
      { text: 'Ruby', value: 'ruby' },
      { text: 'Go', value: 'go' },
      { text: 'Swift', value: 'swift' },
      { text: 'Kotlin', value: 'kotlin' },
    ],
    // tipo de coincidencia por defecto
    filterFn: 'contains',
    enableClickToCopy: true, // habilitar el boton de copiar
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
    // Cell: ({ row }) => (
    //   <p style={{ color: '#C19EDF' }}>{row.original.description}</p>
    // ),
    filterFn: 'contains',
  },
  {
    header: 'TIPO',
    accessorKey: 'type',
    maxSize: 5,
    filterVariant: 'select',
    filterSelectOptions: [
      'BUG',
      'VULNERABILITY',
      'CODE_SMELL',
      'SECURITY_HOTSPOT',
    ],
    enableColumnFilterModes: false, // desactivar el selector de tipos de coindcidencias del buscador
    // personalizar el renderizado de la celda
    Cell: ({ row }) => (
      <Button
        variant='outlined'
        size='small'
        color={getColorForType(row.original.type)}
      >
        {row.original.type}
      </Button>
    ),
  },
  {
    header: 'SEVERIDAD',
    accessorKey: 'severity',
    maxSize: 5,
    filterVariant: 'select',
    filterSelectOptions: ['INFO', 'MINOR', 'MAJOR', 'CRITICAL', 'BLOCKER'],
    enableColumnFilterModes: false,
  },
  {
    id: 'col-state',
    header: 'ESTADO',
    accessorKey: 'state',
    maxSize: 5,
    filterVariant: 'select',
    filterSelectOptions: [
      { text: 'ACTIVADO', value: 'ACTIVE' },
      { text: 'DESACTIVADO', value: 'DESACTIVE' },
    ],
    enableColumnFilterModes: false,
    // personalizar el renderizado de la celda
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
    // CENTRAR EL HEADER Y LAS CELDAS
    // muiTableBodyCellProps: {
    //   align: 'center',
    // },
  },
  {
    header: 'FECHA',
    accessorKey: 'date',
    maxSize: 5,
    // enableColumnFilterModes: false,
    sortingFn: 'datetime',
    filterFn: 'contains',
    Cell: ({ row }) => formatDate(row.original.date),
  },
]
