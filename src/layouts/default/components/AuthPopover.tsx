import { IconButton, Avatar, Menu, MenuItem } from '@mui/material'
import React from 'react'
import { FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

type Props = {
  anchor: null | HTMLElement
  setAnchor: React.Dispatch<React.SetStateAction<null | HTMLElement>>
}

export default function AuthPopover({ anchor, setAnchor }: Props) {
  return (
    <>
      <IconButton size="small" onClick={(e) => setAnchor(e.currentTarget)} sx={{ p: 0.5 }} aria-label="open auth menu">
        <Avatar sx={{ width: 30, height: 30, bgcolor: '#78909c', fontSize: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FiUser size={16} />
        </Avatar>
      </IconButton>
      <Menu
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={() => setAnchor(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{ mt: 0.5 }}
      >
        <MenuItem component={Link} to="/member/login" onClick={() => setAnchor(null)} sx={{ fontSize: '0.95rem' }}>
          Login
        </MenuItem>
        <MenuItem component={Link} to="/member/signup" onClick={() => setAnchor(null)} sx={{ fontSize: '0.95rem' }}>
          Sign Up
        </MenuItem>
        <MenuItem component={Link} to="/member/find-account" onClick={() => setAnchor(null)} sx={{ fontSize: '0.95rem' }}>
          Find ID / Password
        </MenuItem>
      </Menu>
    </>
  )
}
