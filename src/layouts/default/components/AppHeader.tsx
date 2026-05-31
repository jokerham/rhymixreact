import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Divider,
  Container,
} from '@mui/material'
import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { useAuthStore } from '../../../stores/authStore'

import AuthPopover from './AuthPopover'

type NavItem = { label: string; path: string; end: boolean }

type Props = {
  navItems: NavItem[]
  isAdmin: boolean
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleLogout: () => Promise<void>
  navbarStyles: {
    NAVBAR_BG: string
    NAVBAR_BORDER: string
    NAVBAR_TEXT: string
    NAVBAR_TEXT_ACTIVE: string
    NAVBAR_HOVER_BG: string
  }
}

export default function AppHeader({ navItems, isAdmin, setMobileOpen, handleLogout, navbarStyles }: Props) {
  const navigate = useNavigate()
  const [userMenuAnchor, setUserMenuAnchor] = useState<null | HTMLElement>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const { user } = useAuthStore()

  const { NAVBAR_BG, NAVBAR_BORDER, NAVBAR_TEXT, NAVBAR_TEXT_ACTIVE, NAVBAR_HOVER_BG } = navbarStyles

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const navButtonSx = {
    color: NAVBAR_TEXT,
    textTransform: 'none' as const,
    fontSize: '0.875rem',
    px: 1.5,
    py: 0.75,
    minWidth: 'auto',
    borderRadius: 1,
    '&:hover': { color: NAVBAR_TEXT_ACTIVE, bgcolor: NAVBAR_HOVER_BG },
    '&.active': { color: NAVBAR_TEXT_ACTIVE },
  }

  return (
    <AppBar position="fixed" elevation={0} sx={{ bgcolor: NAVBAR_BG, borderBottom: `1px solid ${NAVBAR_BORDER}` }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ gap: 1, minHeight: { xs: 38, sm: 46 } }}>
        <IconButton
          color="inherit"
          edge="start"
          onClick={() => setMobileOpen(true)}
          sx={{ display: { md: 'none' }, color: NAVBAR_TEXT, mr: 0.5 }}
          aria-label="open menu"
        >
          <HamburgerIcon />
        </IconButton>

        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 700,
            letterSpacing: '0.03em',
            mr: 2,
            flexShrink: 0,
            fontSize: '1rem',
          }}
        >
          Rhymix
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.25, flex: 1 }}>
          {navItems.map((item) => (
            <Button key={item.path} component={NavLink} to={item.path} end={item.end} sx={navButtonSx}>
              {item.label}
            </Button>
          ))}
          {isAdmin && (
            <Button component={NavLink} to="/admin" sx={navButtonSx}>
              Admin
            </Button>
          )}
        </Box>

        <Box sx={{ flex: { xs: 1, md: 0 } }} />

        <Box
          component="form"
          onSubmit={handleSearch}
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            bgcolor: 'rgba(255,255,255,0.09)',
            borderRadius: 1,
            px: 1.25,
            py: 0.25,
            mr: 1,
            transition: 'background-color 0.15s',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.13)' },
          }}
        >
          <Box component="span" sx={{ color: 'rgba(255,255,255,0.45)', mr: 0.75, fontSize: '0.8rem', lineHeight: 1 }}>
            &#128269;
          </Box>
          <InputBase
            placeholder="Search…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            inputProps={{ 'aria-label': 'search' }}
            sx={{
              color: '#fff',
              fontSize: '0.85rem',
              width: 150,
              '& input::placeholder': { color: 'rgba(255,255,255,0.4)', opacity: 1 },
            }}
          />
        </Box>

        {user ? (
          <AuthMenu handleLogout={handleLogout} setUserMenuAnchor={setUserMenuAnchor} userMenuAnchor={userMenuAnchor} />
        ) : (
          <AuthPopover anchor={userMenuAnchor} setAnchor={setUserMenuAnchor} />
        )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}

function AuthMenu({ handleLogout, userMenuAnchor, setUserMenuAnchor }: {
  handleLogout: () => Promise<void>
  userMenuAnchor: null | HTMLElement
  setUserMenuAnchor: React.Dispatch<React.SetStateAction<null | HTMLElement>>
}) {
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

function HamburgerIcon() {
  return (
    <Box component="span" sx={{ display: 'flex', flexDirection: 'column', gap: '4px', width: 18 }}>
      {[0, 1, 2].map((i) => (
        <Box key={i} sx={{ height: '2px', bgcolor: 'currentColor', borderRadius: '1px' }} />
      ))}
    </Box>
  )
}
