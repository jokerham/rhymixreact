import { Box, Container } from '@mui/material'
import React from 'react'

type Props = {
  children?: React.ReactNode
}

export default function MainContent({ children }: Props) {
  return (
    <Box component="main" sx={{ flex: 1, bgcolor: '#fff' }}>
      <Container maxWidth="lg" sx={{ py: 3 }}>
        {children}
      </Container>
    </Box>
  )
}
