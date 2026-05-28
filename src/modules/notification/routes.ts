import { createElement, lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

import type { RouteGroup } from '../../types/route'

const NotificationListPage = lazy(() => import('./views/NotificationListPage'))
const NotificationConfigPage = lazy(() => import('./views/NotificationConfigPage'))
const UnsubscribeListPage = lazy(() => import('./views/UnsubscribeListPage'))

const notificationRoutes: RouteObject[] = [
  { path: 'notifications', element: createElement(NotificationListPage) },
  { path: 'notifications/config', element: createElement(NotificationConfigPage) },
  { path: 'notifications/unsubscribe', element: createElement(UnsubscribeListPage) },
]

export const routeGroups: RouteGroup[] = [
  { guard: 'auth', routes: notificationRoutes },
]
