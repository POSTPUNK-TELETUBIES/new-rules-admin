import type { Meta, StoryObj } from '@storybook/react'
import { MRT_ColumnDef, MaterialReactTable } from 'material-react-table'
import { MRT_Localization_ES } from 'material-react-table/locales/es'
import { columns } from '../../components/RulesTable/columns'
import { dataExample } from './dataexample'

const meta = {
  title: 'Components/RulesTable',
  component: MaterialReactTable,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MaterialReactTable>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    data: dataExample,
    columns: columns as MRT_ColumnDef<Record<string, unknown>>[],
    localization: MRT_Localization_ES,
    initialState: {
      showGlobalFilter: true,
      columnPinning: { right: ['mrt-row-actions'] },
      showColumnFilters: true,
    },
    positionGlobalFilter: 'left',
    muiTableHeadCellFilterTextFieldProps: {
      sx: { m: '0.5rem 0' },
      variant: 'outlined',
      size: 'small',
      placeholder: 'Todos',
    },
    muiSearchTextFieldProps: {
      placeholder: `Buscar`,
      sx: { minWidth: '300px' },
      variant: 'outlined',
      size: 'small',
      style: {
        paddingTop: '5px',
        paddingLeft: '8px',
      },
    },
  },
}
