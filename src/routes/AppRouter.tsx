import { Navigate, createHashRouter } from 'react-router-dom'
import Login from '../pages/Login'
import Admin from '../pages/Admin'
import NotFound from '../pages/NotFound'

export const routes = createHashRouter([
  {
    path: '/',
    element: <Navigate to='/login' />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/admin',
    element: <Admin />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
])
