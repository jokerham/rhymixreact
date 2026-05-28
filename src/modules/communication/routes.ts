import { createElement, lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

import type { RouteGroup } from '../../types/route'

const FriendsPage = lazy(() => import('./views/FriendsPage'))
const AddFriendPage = lazy(() => import('./views/AddFriendPage'))
const MessageBoxPage = lazy(() => import('./views/MessageBoxPage'))
const NewMessagePage = lazy(() => import('./views/NewMessagePage'))
const SendMessagePage = lazy(() => import('./views/SendMessagePage'))
const MessageThreadPage = lazy(() => import('./views/MessageThreadPage'))
const SystemMessagePage = lazy(() => import('./views/SystemMessagePage'))

const communicationRoutes: RouteObject[] = [
  { path: 'communication/friends', element: createElement(FriendsPage) },
  { path: 'communication/friends/add', element: createElement(AddFriendPage) },
  { path: 'communication/messages', element: createElement(MessageBoxPage) },
  { path: 'communication/messages/new', element: createElement(NewMessagePage) },
  { path: 'communication/messages/send', element: createElement(SendMessagePage) },
  { path: 'communication/messages/:boxSrl', element: createElement(MessageThreadPage) },
  { path: 'message', element: createElement(SystemMessagePage) },
]

export const routeGroups: RouteGroup[] = [
  { guard: 'auth', routes: communicationRoutes },
]
