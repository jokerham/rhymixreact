import { Avatar, Divider, IconButton, Menu, MenuItem } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from '../../../lib/auth/AuthContext'

type Props = {
  handleLogout: () => Promise<void>
  userMenuAnchor: null | HTMLElement
  setUserMenuAnchor: React.Dispatch<React.SetStateAction<null | HTMLElement>>
}

const menuItemSx = {
  fontSize: '0.8rem',
  py: '4px',
  px: '20px',
  minHeight: 'unset',
}

const arrowPaperSx = {
  mt: '10px',
  overflow: 'visible',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -8,
    right: 13,
    width: 0,
    height: 0,
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderBottom: '8px solid rgba(0,0,0,0.15)',
    zIndex: 0,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: -7,
    right: 14,
    width: 0,
    height: 0,
    borderLeft: '7px solid transparent',
    borderRight: '7px solid transparent',
    borderBottom: '7px solid #fff',
    zIndex: 1,
  },
}

export default function AuthMenu({ handleLogout, userMenuAnchor, setUserMenuAnchor }: Props) {
  const { user } = useAuth()

  return (
    <>
      <IconButton size="small" onClick={(e) => setUserMenuAnchor(e.currentTarget)} sx={{ p: 0.5 }} aria-label="user menu">
        <Avatar sx={{ width: 30, height: 30, bgcolor: '#546e7a', fontSize: '0.8rem' }}>
          {user?.email?.[0]?.toUpperCase() ?? 'U'}
        </Avatar>
      </IconButton>
      <Menu
        anchorEl={userMenuAnchor}
        open={Boolean(userMenuAnchor)}
        onClose={() => setUserMenuAnchor(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{ paper: { elevation: 2, sx: arrowPaperSx } }}
      >
        <MenuItem disabled sx={{ fontSize: '0.75rem', color: 'text.secondary', py: '4px', px: '20px', minHeight: 'unset' }}>
          {user?.email}
        </MenuItem>
        <Divider />
        <MenuItem component={Link} to="/member/modify" onClick={() => setUserMenuAnchor(null)} sx={menuItemSx}>
          My Profile
        </MenuItem>
        <MenuItem component={Link} to="/member/my/documents" onClick={() => setUserMenuAnchor(null)} sx={menuItemSx}>
          My Posts
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout} sx={{ ...menuItemSx, color: 'error.main' }}>
          Logout
        </MenuItem>
      </Menu>
    </>
  )
}
