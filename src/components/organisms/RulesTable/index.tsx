import { MaterialReactTable } from 'material-react-table'
import { columns } from './tableColumns'
import { MRT_Localization_ES } from 'material-react-table/locales/es'
import TableOptionSelector from './TableOptionSelector'
import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../../../services/axios'
import { RuleDTO } from '../../../types/rule'

const RulesTable = () => {
  const { data, error, isLoading } = useQuery<RuleDTO[], string>({
    queryKey: ['rules'],
    queryFn: async () => {
      const { data } = await axiosInstance.get('/rules')
      return data.rules
    },
  })

  return (
    <MaterialReactTable
      columns={columns}
      data={data ?? []}
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
        showColumnFilters: false,
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
        isLoading,
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
