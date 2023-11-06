import { AppBar, Box, LinearProgress, Tab, Tabs } from '@mui/material'
import React from 'react'

interface TabPanelProps {
  children?: React.ReactNode
  index: string
  value: string
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  )
}

const a11yProps = (index: string) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const DrawerOptions = () => {
  const [value, setValue] = React.useState('rulesCuration')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <AppBar position='static'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='secondary'
          textColor='inherit'
          variant='fullWidth'
          aria-label='full width tabs example'
        >
          <Tab label='Curación de reglas' {...a11yProps('rulesCuration')} />
          <Tab
            label='Historial de propuestas'
            {...a11yProps('changeHistory')}
          />
        </Tabs>
      </AppBar>

      <CustomTabPanel value={value} index={'rulesCuration'}>
        <React.Suspense fallback={<LinearProgress />}>
          {/* CONTENIDO */}
        </React.Suspense>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={'changeHistory'}>
        <React.Suspense fallback={<LinearProgress />}>
          {/* CONTENIDO */}
        </React.Suspense>
      </CustomTabPanel>
    </Box>
  )
}

export default DrawerOptions
