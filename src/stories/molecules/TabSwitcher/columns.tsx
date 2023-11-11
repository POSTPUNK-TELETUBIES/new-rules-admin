import Box from '@mui/material/Box'
import { ColumnItem } from '../../../components/molecules/TabSwitcher'

export const COLUMNS_EXAMPLE: ColumnItem[] = [
  {
    order: 0,
    label: 'Detalles de la regla',
    component: <Box>Contenido de Detalles de la regla</Box>,
    Skeleton: <Box>cargando...</Box>,
  },
  {
    order: 1,
    label: 'Curación de la regla',
    component: <Box>Contenido de Curación de la regla</Box>,
    Skeleton: <Box>cargando...</Box>,
  },
  {
    order: 2,
    label: 'Historial de propuestas',
    component: <Box>Contenido de Historial de propuestas</Box>,
    Skeleton: <Box>cargando...</Box>,
  },
  {
    order: 3,
    label: 'Descargar reportes',
    component: <Box>Contenido de Descargar reportes</Box>,
    Skeleton: <Box>cargando...</Box>,
  },
  {
    order: 4,
    label: 'Propuestas pendientes',
    component: <Box>Contenido de Propuestas pendientes</Box>,
    Skeleton: <Box>cargando...</Box>,
  },
]
