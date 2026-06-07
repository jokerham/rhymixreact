import { IconButton, Avatar, Menu, MenuItem } from '@mui/material'
import React from 'react'
import { FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

type Props = {
  anchor: null | HTMLElement
  setAnchor: React.Dispatch<React.SetStateAction<null | HTMLElement>>
  setLoginOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

const menuItemSx = {
  fontSize: '0.8rem',
  py: '4px',
  px: '20px',
  minHeight: 'unset',
}

const arrowPaperSx = {
  mt: '2px',
  ml: '2px',
  overflow: 'visible',
  // outer border arrow
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
  // inner fill arrow
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

export default function AuthPopover({ anchor, setAnchor, setLoginOpen }: Props) {
  return (
    <>
      <IconButton
        size="small"
        onClick={(e) => setAnchor(e.currentTarget)}
        sx={{ p: 0.5 }}
        aria-label="open auth menu"
      >
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
        slotProps={{ paper: { elevation: 2, sx: arrowPaperSx } }}
      >
        <MenuItem onClick={() => { setLoginOpen?.(true); setAnchor(null) }} sx={menuItemSx}>
          Login
        </MenuItem>
        <MenuItem component={Link} to="/member/signup" onClick={() => setAnchor(null)} sx={menuItemSx}>
          Sign Up
        </MenuItem>
        <MenuItem component={Link} to="/member/find-account" onClick={() => setAnchor(null)} sx={menuItemSx}>
          Find ID / Password
        </MenuItem>
      </Menu>
    </>
  )
}
