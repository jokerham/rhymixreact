import { Box, Drawer, List, ListItemButton, ListItemText, Divider } from '@mui/material'
import type { User } from 'firebase/auth'
import React from 'react'
import { Link } from 'react-router-dom'

type NavItem = { label: string; path: string; end: boolean }

type Props = {
  navItems: NavItem[]
  mobileOpen: boolean
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>
  isAdmin: boolean
  user: User | null
  handleLogout: () => Promise<void>
  navbarStyles: { NAVBAR_BG: string; NAVBAR_BORDER: string; NAVBAR_TEXT: string; NAVBAR_HOVER_BG: string }
  setLoginOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MobileDrawer({ navItems, mobileOpen, setMobileOpen, isAdmin, user, handleLogout, navbarStyles, setLoginOpen }: Props) {
  const { NAVBAR_BG, NAVBAR_BORDER, NAVBAR_TEXT, NAVBAR_HOVER_BG } = navbarStyles

  return (
    <Drawer
      anchor="left"
      open={mobileOpen}
      onClose={() => setMobileOpen(false)}
      slotProps={{ paper: { sx: { bgcolor: NAVBAR_BG, color: '#fff', width: 240 } } }}
    >
      <Box sx={{ px: 2, py: 1.5, borderBottom: `1px solid ${NAVBAR_BORDER}` }}>
        <Box component="div" sx={{ fontWeight: 700, fontSize: '1rem', color: '#fff' }}>
          Rhymix
        </Box>
      </Box>
      <List disablePadding>
        {navItems.map((item) => (
          <ListItemButton
            key={item.path}
            component={Link}
            to={item.path}
            onClick={() => setMobileOpen(false)}
            sx={{ color: NAVBAR_TEXT, '&:hover': { bgcolor: NAVBAR_HOVER_BG, color: '#fff' } }}
          >
            <ListItemText primary={item.label} slotProps={{ primary: { style: { fontSize: '0.9rem' } } }} />
          </ListItemButton>
        ))}
        {isAdmin && (
          <ListItemButton component={Link} to="/admin" onClick={() => setMobileOpen(false)} sx={{ color: NAVBAR_TEXT, '&:hover': { bgcolor: NAVBAR_HOVER_BG, color: '#fff' } }}>
            <ListItemText primary="Admin" slotProps={{ primary: { style: { fontSize: '0.9rem' } } }} />
          </ListItemButton>
        )}
        <Divider sx={{ borderColor: NAVBAR_BORDER, my: 0.5 }} />
        {user ? (
          <>
            <ListItemButton component={Link} to="/member/modify" onClick={() => setMobileOpen(false)} sx={{ color: NAVBAR_TEXT, '&:hover': { bgcolor: NAVBAR_HOVER_BG, color: '#fff' } }}>
              <ListItemText primary="My Profile" slotProps={{ primary: { style: { fontSize: '0.9rem' } } }} />
            </ListItemButton>
            <ListItemButton onClick={handleLogout} sx={{ color: '#ef5350' }}>
              <ListItemText primary="Logout" slotProps={{ primary: { style: { fontSize: '0.9rem' } } }} />
            </ListItemButton>
          </>
        ) : (
          <ListItemButton onClick={() => { setLoginOpen?.(true); setMobileOpen(false) }} sx={{ color: NAVBAR_TEXT, '&:hover': { bgcolor: NAVBAR_HOVER_BG, color: '#fff' } }}>
            <ListItemText primary="Login" slotProps={{ primary: { style: { fontSize: '0.9rem' } } }} />
          </ListItemButton>
        )}
      </List>
    </Drawer>
  )
}
