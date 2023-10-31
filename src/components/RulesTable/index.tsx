import { MaterialReactTable } from 'material-react-table'
import { columns } from './tableColumns'
import { useQuery, UseQueryResult } from 'react-query'
import { MRT_Localization_ES } from 'material-react-table/locales/es'
import { Rule } from '../../types/rule'
import TableOptionSelector from './TableOptionSelector'

const fetchData = async () => {
  const response = await fetch('/rules')
  const data = await response.json()
  return data.rules
}

const RulesTable = () => {
  const { data, error, isFetching }: UseQueryResult<Rule[]> = useQuery(
    'rules',
    fetchData,
  )

  return (
    <MaterialReactTable
      columns={columns}
      data={data || []}
      enableColumnFilterModes
      enableRowActions
      positionActionsColumn='last'
      renderRowActions={() => <TableOptionSelector />}
      enableStickyHeader
      enableStickyFooter
      muiTableContainerProps={{ sx: { minHeight: 'calc(100vh - 12.5rem)' } }}
      initialState={{
        pagination: { pageSize: 20, pageIndex: 0 },
        showGlobalFilter: true,
        density: 'comfortable',
        columnPinning: { right: ['mrt-row-actions'] },
        showColumnFilters: true,
      }}
      positionGlobalFilter='left'
      muiSearchTextFieldProps={{
        placeholder: 'Buscar',
        sx: {
          minWidth: '18.75rem',
          paddingTop: 1,
          paddingLeft: 1,
        },
        variant: 'outlined',
        size: 'small',
      }}
      displayColumnDefOptions={{
        'mrt-row-actions': {
          header: '',
          size: 0,
          muiTableBodyCellProps: {
            sx: { padding: 0, paddingLeft: 0.5 },
          },
        },
      }}
      muiTableHeadCellFilterTextFieldProps={{
        sx: { mx: 0, my: 1 },
        variant: 'outlined',
        size: 'small',
        placeholder: 'Todos',
      }}
      state={{
        isLoading: isFetching,
        showAlertBanner: !!error,
      }}
      muiToolbarAlertBannerProps={{
        color: 'error',
        children: 'Error al cargar los datos de la tabla',
      }}
      enableDensityToggle={false}
      localization={MRT_Localization_ES}
    />
  )
}

export default RulesTable
