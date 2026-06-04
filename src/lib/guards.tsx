import { Navigate, Outlet } from 'react-router-dom'

import { useAuth } from './auth/AuthContext'

export function AuthGuard() {
  const { user } = useAuth()
  return user ? <Outlet /> : <Navigate to="/member/login" replace />
}

export function GuestGuard() {
  const { user } = useAuth()
  return user ? <Navigate to="/" replace /> : <Outlet />
}

export function AdminGuard() {
  const { user, isAdmin } = useAuth()
  return user && isAdmin ? <Outlet /> : <Navigate to="/" replace />
}
