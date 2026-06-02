import { Box, Container } from '@mui/material'
import React from 'react'

import Breadcrumb from './Breadcrumb'

type Props = {
  children?: React.ReactNode
}

export default function MainContent({ children }: Props) {
  return (
    <Box component="main" sx={{ flex: 1, bgcolor: 'transparent' }}>
      <Container maxWidth="lg" sx={{ pt: 0.2, pb: 3 }}>
        <Breadcrumb />
        <Box
          component="article"
          sx={{
            bgcolor: 'rgba(255,255,255,0.9)',
            borderRadius: '4px',
            boxShadow: '0 0 1px rgba(0,0,0,0.075)',
            border: '1px solid #ddd',
            p: '19px',
            position: 'relative',
          }}
        >
          {children}
        </Box>
      </Container>
    </Box>
  )
}
