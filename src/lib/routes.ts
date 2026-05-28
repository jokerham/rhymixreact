import { createElement, lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

import RootLayout from '../layouts/RootLayout'
import type { RouteGroup } from '../types/route'

import { AdminGuard, AuthGuard, GuestGuard } from './guards'

const HomePage = lazy(() => import('../pages/HomePage'))
const NotFound = lazy(() => import('../pages/NotFound'))

const moduleFiles = import.meta.glob<{ routeGroups: RouteGroup[] }>(
  '../modules/*/routes.ts',
  { eager: true },
)

const allGroups = Object.values(moduleFiles).flatMap((m) => m.routeGroups ?? [])

const byGuard = (guard: RouteGroup['guard']) =>
  allGroups.filter((g) => g.guard === guard).flatMap((g) => g.routes)

export const routes: RouteObject[] = [
  {
    path: '/',
    element: createElement(RootLayout),
    errorElement: createElement(NotFound),
    children: [
      { index: true, element: createElement(HomePage) },

      { element: createElement(GuestGuard), children: byGuard('guest') },
      ...byGuard('public'),
      { element: createElement(AuthGuard), children: byGuard('auth') },
      { element: createElement(AdminGuard), children: byGuard('admin') },
      ...byGuard('last'),

      { path: '*', element: createElement(NotFound) },
    ],
  },
]
