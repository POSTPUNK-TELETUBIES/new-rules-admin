import { LinearProgress } from '@mui/material'
import { Suspense } from 'react'
import { AppProvider } from './context/AppContext'
import { ToggleColorMode } from './theme/themeContext'
import { AppRoutes } from './routes/AppRouter'
import { isMSWOn } from './config/worker.ts'
import { DataProvider } from 'data_providers'
import { providerNames } from './dataProviders/index.ts'

if (import.meta.env.DEV && isMSWOn) {
  const { worker } = await import('../mocks/browser.ts')

  await worker.start({
    waitUntilReady: true,
  })
}

const App = () => {
  return (
    <Suspense fallback={<LinearProgress />}>
      <DataProvider providers={providerNames}>
        <AppProvider>
          <ToggleColorMode>
            <AppRoutes />
          </ToggleColorMode>
        </AppProvider>
      </DataProvider>
    </Suspense>
  )
}

export default App
