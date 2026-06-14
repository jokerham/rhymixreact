import { createElement, lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

import type { RouteGroup } from '../../types/route'

const MenuListPage = lazy(() => import('./views/MenuListPage'))

const menuRoutes: RouteObject[] = [
  {
    path: 'admin',
    children: [{ path: 'menu', element: createElement(MenuListPage) }],
  },
]

export const routeGroups: RouteGroup[] = [
  { guard: 'admin', routes: menuRoutes },
]

export default menuRoutes
