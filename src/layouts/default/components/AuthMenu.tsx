import { Avatar, Divider, IconButton, Menu, MenuItem } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import { useAuthStore } from '../../../stores/authStore'

type Props = {
  handleLogout: () => Promise<void>
  userMenuAnchor: null | HTMLElement
  setUserMenuAnchor: React.Dispatch<React.SetStateAction<null | HTMLElement>>
}

export default function AuthMenu({ handleLogout, userMenuAnchor, setUserMenuAnchor }: Props) {
  const { user } = useAuthStore()

  return user ? (
    <>
      <IconButton size="small" onClick={(e) => setUserMenuAnchor(e.currentTarget)} sx={{ p: 0.5 }} aria-label="user menu">
        <Avatar sx={{ width: 30, height: 30, bgcolor: '#546e7a', fontSize: '0.8rem' }}>{user.email?.[0]?.toUpperCase() ?? 'U'}</Avatar>
      </IconButton>
      <Menu
        anchorEl={userMenuAnchor}
        open={Boolean(userMenuAnchor)}
        onClose={() => setUserMenuAnchor(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{ mt: 0.5 }}
      >
        <MenuItem disabled sx={{ fontSize: '0.78rem', color: 'text.secondary', py: 0.5 }}>
          {user.email}
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to="/member/modify" onClick={() => setUserMenuAnchor(null)} sx={{ fontSize: '0.875rem' }}>
          My Profile
        </MenuItem>
        <MenuItem component={Link} to="/member/my/documents" onClick={() => setUserMenuAnchor(null)} sx={{ fontSize: '0.875rem' }}>
          My Posts
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout} sx={{ fontSize: '0.875rem', color: 'error.main' }}>
          Logout
        </MenuItem>
      </Menu>
    </>
  ) : (
    <>
      <IconButton size="small" onClick={(e) => setUserMenuAnchor(e.currentTarget)} sx={{ p: 0.5 }} aria-label="open auth menu">
        <Avatar sx={{ width: 30, height: 30, bgcolor: '#78909c', fontSize: '0.8rem' }}>?</Avatar>
      </IconButton>
      <Menu
        anchorEl={userMenuAnchor}
        open={Boolean(userMenuAnchor)}
        onClose={() => setUserMenuAnchor(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{ mt: 0.5 }}
      >
        <MenuItem component={Link} to="/member/login" onClick={() => setUserMenuAnchor(null)} sx={{ fontSize: '0.95rem' }}>
          Login
        </MenuItem>
        <MenuItem component={Link} to="/member/signup" onClick={() => setUserMenuAnchor(null)} sx={{ fontSize: '0.95rem' }}>
          Sign Up
        </MenuItem>
        <MenuItem component={Link} to="/member/find-account" onClick={() => setUserMenuAnchor(null)} sx={{ fontSize: '0.95rem' }}>
          Find ID / Password
        </MenuItem>
      </Menu>
    </>
  )
}
