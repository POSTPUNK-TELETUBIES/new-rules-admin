import { lazy } from 'react'
import { Navigate, createHashRouter } from 'react-router-dom'

const Login = lazy(() => import('../pages/Login'))
const Admin = lazy(() => import('../pages/Admin'))
const NotFound = lazy(() => import('../pages/NotFound'))

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
