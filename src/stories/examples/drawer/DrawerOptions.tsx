import { AppBar, Box, LinearProgress, Tab, Tabs } from '@mui/material'
import { Suspense, useState } from 'react'
import { RulesCuration } from './RulesCuration'

interface TabPanelProps {
  children?: React.ReactNode
  index: string
  value: string
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props

  return (
    <Box
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  )
}

const a11yProps = (index: string) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export const DrawerOptions = () => {
  const [value, setValue] = useState('rulesCuration')

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
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
          <Tab label='Curación de reglas' value='rulesCuration' {...a11yProps('rulesCuration')} />
          <Tab label='Historial de propuestas' value='agregar' {...a11yProps('changeHistory')}/>
        </Tabs>
      </AppBar>

      <CustomTabPanel value={value} index='rulesCuration'>
        <Suspense fallback={<LinearProgress />}>
          <RulesCuration />
        </Suspense>
      </CustomTabPanel>
      <CustomTabPanel value={value} index='changeHistory'>
        <Suspense fallback={<LinearProgress />}>
        </Suspense>
      </CustomTabPanel>
    </Box>
  )
}
