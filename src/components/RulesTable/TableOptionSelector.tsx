import { Suspense, useCallback, useContext } from 'react'
import HistoryIcon from '@mui/icons-material/History'
import Skeleton from '@mui/material/Skeleton'
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import SelectOptions, { ItemOfSelector } from '../SelectOptions'
import { DrawerContext } from '../Drawer/Drawercontext'
import { Rule } from '../../types/rule'

type TableOptionSelectorProps = {
  item: Rule
}

const TableOptionSelector = ({ item }: TableOptionSelectorProps) => {
  const { setIsOpenDrawer, setColumnActive, setItemActive } =
    useContext(DrawerContext)

  const handleItemClick = useCallback(
    (columnIndex: number) => () => {
      setIsOpenDrawer(true)
      setColumnActive(columnIndex)
      setItemActive(item)
    },
    [setIsOpenDrawer, setColumnActive],
  )

  const ITEMS_FOR_SELECTOR: ItemOfSelector[] = [
    {
      icon: <ChromeReaderModeIcon />,
      text: 'Detalles de la regla',
      onClick: handleItemClick(0),
    },
    {
      icon: <HistoryIcon />,
      text: 'Historial de propuestas',
      onClick: handleItemClick(1),
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
