import { Suspense } from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import { routes } from './routes/AppRouter'
import { RouterProvider } from 'react-router-dom'
import HeaderApp from './components/organisms/Header/HeaderApp.tsx'
import AppProviders from './AppProviders.tsx'

const App = () => {
  return (
    <AppProviders>
      <HeaderApp />
      <Suspense fallback={<LinearProgress />}>
        <RouterProvider
          router={routes}
          fallbackElement={<LinearProgress />}
          future={{ v7_startTransition: true }}
        />
      </Suspense>
    </AppProviders>
  )
}

export default App
