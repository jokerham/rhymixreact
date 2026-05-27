import { Navigate, Outlet } from 'react-router-dom'

import { useAuthStore } from '../stores/authStore'

export function AuthGuard() {
  const user = useAuthStore((s) => s.user)
  return user ? <Outlet /> : <Navigate to="/member/login" replace />
}

export function GuestGuard() {
  const user = useAuthStore((s) => s.user)
  return user ? <Navigate to="/" replace /> : <Outlet />
}

export function AdminGuard() {
  const user = useAuthStore((s) => s.user)
  const isAdmin = useAuthStore((s) => s.isAdmin)
  return user && isAdmin ? <Outlet /> : <Navigate to="/" replace />
}
