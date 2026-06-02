import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'rgba(255,255,255,0.5)',
        borderTop: '1px solid #ddd',
        boxShadow: '0 0 1px rgba(0,0,0,0.075)',
        py: 1.5,
        mt: 'auto',
        transition: 'background-color 0.2s, box-shadow 0.2s',
        '&:hover': {
          bgcolor: 'rgba(255,255,255,0.7)',
          boxShadow: '0 0 1px rgba(0,0,0,0.075), inset 0 -5px 3px -1px rgba(0,0,0,0.2)',
        },
      }}
    >
      <Container maxWidth="xl">
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
              <Typography key={label} variant="body2" component={Link} to="/" sx={{ color: '#555', textDecoration: 'none', '&:hover': { color: '#333' } }}>
                {label}
              </Typography>
            ))}
          </Box>
          <Typography variant="body2" sx={{ color: '#555' }}>
            &copy; {new Date().getFullYear()} Nanitelink. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
