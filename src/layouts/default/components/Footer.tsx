import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#f5f5f5', borderTop: '1px solid #e0e0e0', py: 1.5, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          <Box sx={{ display: 'flex', gap: 2 }}>
            {['Privacy Policy', 'Terms of Service', 'Contact'].map((label) => (
              <Typography key={label} variant="body2" component={Link} to="/" sx={{ color: '#757575', textDecoration: 'none', '&:hover': { color: '#212121' } }}>
                {label}
              </Typography>
            ))}
          </Box>
          <Typography variant="body2" sx={{ color: '#9e9e9e' }}>
            &copy; {new Date().getFullYear()} Rhymix. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
