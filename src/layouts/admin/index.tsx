import { Box, Container } from '@mui/material'
import { signOut } from 'firebase/auth'
import { Outlet, useNavigate } from 'react-router-dom'

import { useAuth } from '../../lib/auth/AuthContext'
import { auth } from '../../lib/firebase'

import AdminFooter from './components/AdminFooter'
import AdminHeader from './components/AdminHeader'
import AdminSidebar from './components/AdminSidebar'

export default function AdminLayout() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await signOut(auth)
    navigate('/')
  }

  return (
    <Container maxWidth="lg" disableGutters sx={{ backgroundColor: '#ffffff' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'transparent' }}>
        <AdminHeader user={user} onLogout={handleLogout} />

        <Box sx={{ display: 'flex', flex: 1 }}>
          <AdminSidebar />

          <Box component="main" sx={{ flex: 1, p: 2 }}>
            <Outlet />
          </Box>
        </Box>

        <AdminFooter />
      </Box>
    </Container>
  )
}
