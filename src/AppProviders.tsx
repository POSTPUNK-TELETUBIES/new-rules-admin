import { PropsWithChildren } from 'react'
import { ColorModeProvider } from './theme/ColorModeProvider.tsx'
import { isMSWOn } from './config/worker.ts'
import { DataProvider } from 'data_providers'
import { providerNames } from './dataProviders/index.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

if (import.meta.env.DEV && isMSWOn) {
  const { worker } = await import('../mocks/browser.ts')

  await worker.start({
    waitUntilReady: true,
  })
}

const queryClient = new QueryClient()

const AppProviders = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ColorModeProvider>
        <DataProvider providers={providerNames}>{children}</DataProvider>
      </ColorModeProvider>
    </QueryClientProvider>
  )
}

export default AppProviders
