import { Suspense, useContext } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box, { BoxProps } from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import { DrawerContext } from '../organisms/Drawer/Drawercontext'

export interface ColumnItem {
  order: number
  label: string
  component: JSX.Element
  Skeleton: JSX.Element
}

interface TabSwitcherProps extends BoxProps {
  items: ColumnItem[]
}

const TabSwitcher = ({ items, ...rest }: Readonly<TabSwitcherProps>) => {
  const { columnActive, setColumnActive } = useContext(DrawerContext)

  return (
    <Box {...rest}>
      <AppBar position='static' component='header'>
        <Tabs
          value={columnActive}
          onChange={(_, newColumnValue) => setColumnActive(newColumnValue)}
          indicatorColor='secondary'
          textColor='inherit'
          variant='fullWidth'
        >
          {items.map((column) => (
            <Tab key={column.order} label={column.label} />
          ))}
        </Tabs>
      </AppBar>

      {items.map((column) => (
        <Box key={column.order}>
          {columnActive === column.order && (
            <Box sx={{ p: 3 }}>
              <Suspense fallback={column.Skeleton}>{column.component}</Suspense>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  )
}

export default TabSwitcher
