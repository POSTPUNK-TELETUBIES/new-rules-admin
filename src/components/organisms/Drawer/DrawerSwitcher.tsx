import TabSwitcher, { ColumnItem } from '../../molecules/TabSwitcher'
import SectionDetailsSkeleton from '../../atoms/skeletons/SectionDetailsSkeleton'
import SectionCuracionSkeleton from '../../atoms/skeletons/SectionCuracionSkeleton'
import SectionHistorySkeleton from '../../atoms/skeletons/SectionHistorySkeleton'

const COLUMNS: ColumnItem[] = [
  {
    order: 0,
    label: 'Detalles de la regla',
    component: <>Contenido de Detalles de la regla</>,
    Skeleton: <SectionDetailsSkeleton />,
  },
  {
    order: 1,
    label: 'Curación de la regla',
    component: <>Contenido de Curación de la regla</>,
    Skeleton: <SectionCuracionSkeleton />,
  },
  {
    order: 2,
    label: 'Historial de propuestas',
    component: <>Contenido de Historial de propuestas</>,
    Skeleton: <SectionHistorySkeleton />,
  },
]

const DrawerSwitcher = () => {
  return <TabSwitcher items={COLUMNS} />
}

export default DrawerSwitcher
