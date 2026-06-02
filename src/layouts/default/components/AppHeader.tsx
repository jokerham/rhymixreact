import { AppBar, Box, Button, IconButton, InputBase, Toolbar, Typography, Container } from '@mui/material'
import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { useAuthStore } from '../../../stores/authStore'

import AuthMenu from './AuthMenu'
import AuthPopover from './AuthPopover'

type NavItem = { label: string; path: string; end: boolean }

type Props = {
  navItems: NavItem[]
  isAdmin: boolean
  setMobileOpen: (open: boolean) => void
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

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const navButtonSx = {
    color: NAVBAR_TEXT,
    textTransform: 'none' as const,
    fontSize: '12px',
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
        <Toolbar sx={{ gap: 1, minHeight: { xs: 46, sm: 40 } }}>
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
          Nanitelink
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

function HamburgerIcon() {
  return (
    <Box component="span" sx={{ display: 'flex', flexDirection: 'column', gap: '4px', width: 18 }}>
      {[0, 1, 2].map((i) => (
        <Box key={i} sx={{ height: '2px', bgcolor: 'currentColor', borderRadius: '1px' }} />
      ))}
    </Box>
  )
}
