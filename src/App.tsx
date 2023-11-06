import { Suspense, lazy } from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import { ColorModeProvider } from './theme/ColorModeProvider.tsx'
import { routes } from './routes/AppRouter'
import { isMSWOn } from './config/worker.ts'
import { DataProvider } from 'data_providers'
import { providerNames } from './dataProviders/index.ts'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { SnackbarProvider } from 'notistack'

const Header = lazy(() => import('./components/Header.tsx'))

if (import.meta.env.DEV && isMSWOn) {
  const { worker } = await import('../mocks/browser.ts')

  await worker.start({
    waitUntilReady: true,
  })
}

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ColorModeProvider>
        <SnackbarProvider maxSnack={3}>
          <Suspense fallback={<LinearProgress />}>
            <DataProvider providers={providerNames}>
              <Suspense fallback={<LinearProgress />}>
                <Header />
              </Suspense>
              <Suspense fallback={<LinearProgress />}>
                <RouterProvider router={routes} />
              </Suspense>
            </DataProvider>
          </Suspense>
        </SnackbarProvider>
      </ColorModeProvider>
    </QueryClientProvider>
  )
}

export default App
