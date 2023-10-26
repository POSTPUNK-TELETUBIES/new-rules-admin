import { LinearProgress } from '@mui/material'
import { Suspense } from 'react'
import { ToggleColorMode } from './theme/themeContext'
import { routes } from './routes/AppRouter'
import { isMSWOn } from './config/worker.ts'
import { DataProvider } from 'data_providers'
import { providerNames } from './dataProviders/index.ts'
import { RouterProvider } from 'react-router-dom'

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
        <ToggleColorMode>
          <RouterProvider router={routes} />
        </ToggleColorMode>
      </DataProvider>
    </Suspense>
  )
}

export default App
