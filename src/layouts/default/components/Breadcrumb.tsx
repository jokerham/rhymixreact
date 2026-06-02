import { Box } from '@mui/material'
import { FaSitemap } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

import { useMenuStore } from '../../../stores/menuStore'

function normalize(path: string) {
  return path.startsWith('/') ? path : `/${path}`
}

export default function Breadcrumb() {
  const location = useLocation()
  const navItems = useMenuStore((state) => state.navItems)
  const isLoaded = useMenuStore((state) => state.isLoaded)

  if (!isLoaded) return null

  const pathname = location.pathname

  const current = navItems.find((item) => {
    const p = normalize(item.path)
    if (pathname === '/') return p === '/' || p === '/index'
    if (item.end) return pathname === p
    return pathname.startsWith(p)
  })

  if (!current) return null

  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        px: '14px',
        py: '7px',
        mb: '10px',
        background: 'linear-gradient(to bottom, #fff, #f5f5f5)',
        border: '1px solid #ddd',
        borderRadius: '3px',
        boxShadow: '0 0 1px rgba(0,0,0,0.075)',
        opacity: 0.95,
        fontSize: '11px',
        gap: '4px',
      }}
    >
      <Box
        component={Link}
        to="/"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          color: '#555',
          mr: '5px',
          textDecoration: 'none',
          '&:hover': { color: '#333' },
        }}
      >
        <FaSitemap />
      </Box>
      <Box component="span" sx={{ color: '#ccc', mr: '5px' }}>-</Box>
      <Box
        component={Link}
        to={normalize(current.path)}
        sx={{
          color: '#555',
          textDecoration: 'none',
          '&:hover': { color: '#333', textDecoration: 'none' },
        }}
      >
        {current.label}
      </Box>
    </Box>
  )
}
