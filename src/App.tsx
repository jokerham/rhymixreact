import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { AuthProvider } from './lib/auth/AuthContext'
import { LayoutProvider } from './lib/layout/LayoutContext'
import { routes } from './lib/routes'
import './App.css'

const router = createBrowserRouter(routes)

export default function App() {
  return (
    <AuthProvider>
      <LayoutProvider>
        <RouterProvider router={router} />
      </LayoutProvider>
    </AuthProvider>
  )
}
