import { ToggleColorMode } from './theme/themeContext.tsx'
import { routes } from './routes/AppRouter.tsx'
import { LinearProgress } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { Suspense } from 'react'

const App = () => {
  return (
    <Suspense fallback={<LinearProgress />}>
      <ToggleColorMode>
        <RouterProvider router={routes} />
      </ToggleColorMode>
    </Suspense>
  )
}

export default App
