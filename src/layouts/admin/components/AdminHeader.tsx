import { AppBar, Box, Divider, Link, Toolbar, Typography } from '@mui/material'
import type { User } from 'firebase/auth'

type Props = {
  user: User | null
  onLogout: () => void
}

export default function AdminHeader({ user, onLogout }: Props) {
  const displayName = user?.displayName ?? user?.email?.split('@')[0] ?? 'Admin'

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ backgroundColor: '#ffffff', color: 'text.primary', boxShadow: 'none', borderBottom: '1px solid', borderColor: 'divider', marginBottom: 2 }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="h6" sx={{ flexShrink: 0, fontWeight: 700, fontFamily: 'inherit' }}>
            Admin Portal
          </Typography>

          <Link href="/" color="text.primary" underline="none" variant="subtitle1" sx={{ ml: 0, fontSize: '13px' }}>
            http://www.nanitelink.com
          </Link>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="subtitle1" sx={{ color: 'text.primary', fontSize: '13px' }}>
            {displayName}
          </Typography>
          <Divider orientation="vertical" flexItem sx={{ mx: 1, borderColor: 'rgba(0,0,0,0.12)' }} />
          <Link
            component="button"
            color="text.primary"
            underline="none"
            onClick={onLogout}
            sx={{ background: 'none', border: 0, cursor: 'pointer', font: 'inherit', fontSize: '13px' }}
          >
            <Typography variant="subtitle1" sx={{ fontSize: '13px' }}>Sign Out</Typography>
          </Link>
          <Divider orientation="vertical" flexItem sx={{ mx: 1, borderColor: 'rgba(0,0,0,0.12)' }} />
          <Typography variant="subtitle1" sx={{ color: 'text.primary', cursor: 'pointer', fontSize: '13px' }}>
            English
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
