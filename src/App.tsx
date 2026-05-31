import { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { routes } from './lib/routes'
import { useLayoutStore } from './stores/layoutStore'
import { useMenuStore } from './stores/menuStore'
import './App.css'

const router = createBrowserRouter(routes)

const MAIN_MENU_SRL = 1

export default function App() {
  const init = useLayoutStore((state) => state.init)
  const fetchMenu = useMenuStore((state) => state.fetchMenu)

  useEffect(() => {
    init()
    fetchMenu(MAIN_MENU_SRL)
  }, [init, fetchMenu])

  return <RouterProvider router={router} />
}
