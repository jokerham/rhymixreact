import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { routes } from './lib/routes'
import './App.css'

const router = createBrowserRouter(routes)

export default function App() {
  return <RouterProvider router={router} />
}
