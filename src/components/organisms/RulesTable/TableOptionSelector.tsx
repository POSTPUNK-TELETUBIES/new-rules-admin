import { Suspense } from 'react'
import HistoryIcon from '@mui/icons-material/History'
import AddIcon from '@mui/icons-material/Add'
import Skeleton from '@mui/material/Skeleton'
import ChromeReaderModeIcon from '@mui/icons-material/ChromeReaderMode'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import SelectOptions, { ItemOfSelector } from '../../molecules/SelectOptions'

const ITEMS_FOR_SELECTOR: ItemOfSelector[] = [
  {
    icon: <ChromeReaderModeIcon />,
    text: 'Detalles de la regla',
    onClick: () => {},
  },
  {
    icon: <AddIcon />,
    text: 'Agregar propuesta',
    onClick: () => {},
  },
  {
    icon: <HistoryIcon />,
    text: 'Historial de propuestas',
    onClick: () => {},
  },
]

const TableOptionSelector = () => {
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
