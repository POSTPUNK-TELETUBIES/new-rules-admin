import { Suspense, useCallback, useContext } from 'react'
import HistoryIcon from '@mui/icons-material/History'
import Skeleton from '@mui/material/Skeleton'
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import SelectOptions, { ItemOfSelector } from '../SelectOptions'
import { DrawerContext } from '../../stories/examples/drawer/Drawercontext'
import { RuleDTO } from '../../types/rule'

type TableOptionSelectorProps = {
  item: RuleDTO
}

const TableOptionSelector = ({ item }: TableOptionSelectorProps) => {
  const { setIsOpenDrawer, setColumnActive, setItemActive } =
    useContext(DrawerContext)

  const handleItemClick = useCallback(
    (columnIndex: string) => () => {
      setIsOpenDrawer(true)
      setColumnActive(columnIndex)
      setItemActive(item.id)
    },
    [setIsOpenDrawer, setColumnActive],
  )

  const ITEMS_FOR_SELECTOR: ItemOfSelector[] = [
    {
      icon: <ChromeReaderModeIcon />,
      text: 'Detalles de la regla',
      onClick: handleItemClick('detail'),
    },
    {
      icon: <HistoryIcon />,
      text: 'Historial de propuestas',
      onClick: handleItemClick('curation'),
    },
  ]

  return (
    <Suspense fallback={<Skeleton variant='text' />}>
      <SelectOptions
        icon={<MoreHorizIcon fontSize='small' />}
        items={ITEMS_FOR_SELECTOR}
      />
    </Suspense>
  )
}

export default TableOptionSelector
