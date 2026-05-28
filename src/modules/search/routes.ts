import { createElement, lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

import type { RouteGroup } from '../../types/route'

const SearchPage = lazy(() => import('./views/SearchPage'))

const searchRoutes: RouteObject[] = [
  { path: 'search', element: createElement(SearchPage) },
]

export const routeGroups: RouteGroup[] = [
  { guard: 'public', routes: searchRoutes },
]
