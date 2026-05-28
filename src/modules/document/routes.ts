import { createElement, lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

import type { RouteGroup } from '../../types/route'

const TempSavedPage = lazy(() => import('./views/TempSavedPage'))
const DeclarePage = lazy(() => import('./views/DeclarePage'))

const documentRoutes: RouteObject[] = [
  { path: 'document/temp-saved', element: createElement(TempSavedPage) },
  { path: 'document/declare', element: createElement(DeclarePage) },
]

export const routeGroups: RouteGroup[] = [
  { guard: 'auth', routes: documentRoutes },
]
