import { type RouteObject } from 'react-router-dom'

export type RouteGuard = 'guest' | 'public' | 'auth' | 'admin' | 'last'

export interface RouteGroup {
  guard: RouteGuard
  routes: RouteObject[]
}
