import { createElement, lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

import RootLayout from '../layouts/RootLayout'
import { adminRoutes } from '../modules/admin/routes'
import { boardRoutes } from '../modules/board/routes'
import { communicationRoutes } from '../modules/communication/routes'
import { documentRoutes } from '../modules/document/routes'
import { memberRoutes } from '../modules/member/routes'
import { notificationRoutes } from '../modules/notification/routes'
import { searchRoutes } from '../modules/search/routes'

import { AdminGuard, AuthGuard, GuestGuard } from './guards'

const HomePage = lazy(() => import('../pages/HomePage'))
const NotFound = lazy(() => import('../pages/NotFound'))

export const routes: RouteObject[] = [
  {
    path: '/',
    element: createElement(RootLayout),
    errorElement: createElement(NotFound),
    children: [
      // ── Core ────────────────────────────────────────────
      { index: true, element: createElement(HomePage) },

      // ── Member — Guest only ──────────────────────────────
      {
        element: createElement(GuestGuard),
        children: memberRoutes.filter((r) => {
          const path = r.path as string
          return path?.includes('login') || path?.includes('signup') || path?.includes('find-account')
        }),
      },

      // ── Member — Public profile ──────────────────────────
      ...memberRoutes.filter((r) => {
        const path = r.path as string
        return path?.includes(':memberSrl') && !path?.includes('modify')
      }),

      // ── Member — Auth required ───────────────────────────
      {
        element: createElement(AuthGuard),
        children: [
          ...memberRoutes.filter((r) => {
            const path = r.path as string
            return path?.includes('modify') || path?.includes('leave') || path?.includes('active-logins') || path?.includes('my/')
          }),
          ...documentRoutes,
          ...communicationRoutes,
          ...notificationRoutes,
        ],
      },

      // ── Search ──────────────────────────────────────────
      ...searchRoutes,

      // ── Admin (AdminGuard) ──────────────────────────────
      {
        element: createElement(AdminGuard),
        children: adminRoutes,
      },

      // ── Dynamic board/page (:mid) — MUST be last ────────
      ...boardRoutes,

      // ── 404 ─────────────────────────────────────────────
      { path: '*', element: createElement(NotFound) },
    ],
  },
]
