import { AppBar, Box, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'

interface TabSwitchOptions {
  label: React.ReactNode
  bodyElement: React.ReactNode
}

const buildTabSwitcher = (tabsOptions: Record<string, TabSwitchOptions>) => {
  return ({ defaultTab }: { defaultTab: string }) => {
    const [currentTab, setCurrentTab] = useState<string>(defaultTab)

    return (
      <>
        <AppBar position='static'>
          <Tabs
            value={currentTab}
            onChange={(_, newColumnValue) => setCurrentTab(newColumnValue)}
            indicatorColor='secondary'
            textColor='inherit'
          >
            {Object.keys(tabsOptions).map((key) => (
              <Tab
                value={key}
                key={key}
                label={tabsOptions[key].label}
                onClick={() => setCurrentTab(key)}
              />
            ))}
          </Tabs>
        </AppBar>

        <Box sx={{ p: 3 }}>{tabsOptions[currentTab].bodyElement}</Box>
      </>
    )
  }
}

export default buildTabSwitcher
