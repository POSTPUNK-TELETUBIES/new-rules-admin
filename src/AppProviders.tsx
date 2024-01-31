import { PropsWithChildren } from 'react'
import { ColorModeProvider } from './theme/ColorModeProvider.tsx'
import { DataProvider } from 'data_providers'
import { providerNames } from './dataProviders/index.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

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
