import { Box, Toolbar } from '@mui/material'
import { signOut } from 'firebase/auth'
import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { useAuth } from '../../lib/auth/AuthContext'
import { auth } from '../../lib/firebase'
import { useMenuItems } from '../../modules/menu/hooks/useMenuItems'

import AppHeader from './components/AppHeader'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import MobileDrawer from './components/MobileDrawer'

const NAVBAR_BG = '#212121'
const NAVBAR_BORDER = 'rgba(255,255,255,0.1)'
const NAVBAR_TEXT = '#999999'
const NAVBAR_TEXT_ACTIVE = '#ffffff'
const NAVBAR_HOVER_BG = 'rgba(255,255,255,0.08)'

export default function DefaultLayout() {
  const navigate = useNavigate()
  const { user, isAdmin } = useAuth()
  const { navItems } = useMenuItems()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleLogout = async () => {
    setMobileOpen(false)
    await signOut(auth)
    navigate('/')
  }

  const navbarStyles = { NAVBAR_BG, NAVBAR_BORDER, NAVBAR_TEXT, NAVBAR_TEXT_ACTIVE, NAVBAR_HOVER_BG }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppHeader navItems={navItems} isAdmin={isAdmin} setMobileOpen={setMobileOpen} handleLogout={handleLogout} navbarStyles={navbarStyles} />

      <MobileDrawer navItems={navItems} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} isAdmin={isAdmin} user={user} handleLogout={handleLogout} navbarStyles={navbarStyles} />

      <Toolbar sx={{ minHeight: { xs: 46, sm: 50 } }} />

      <MainContent>
        <Outlet />
      </MainContent>

      <Footer />
    </Box>
  )
}
