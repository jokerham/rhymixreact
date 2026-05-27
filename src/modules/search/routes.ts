import { createElement, lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

const SearchPage = lazy(() => import('./views/SearchPage'))

export const searchRoutes: RouteObject[] = [
  { path: 'search', element: createElement(SearchPage) },
]
