import { createElement, lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

const TempSavedPage = lazy(() => import('./views/TempSavedPage'))
const DeclarePage = lazy(() => import('./views/DeclarePage'))

export const documentRoutes: RouteObject[] = [
  { path: 'document/temp-saved', element: createElement(TempSavedPage) },
  { path: 'document/declare', element: createElement(DeclarePage) },
]
