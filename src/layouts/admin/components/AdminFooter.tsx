import { Box, Divider, Typography } from '@mui/material'

export default function AdminFooter() {
  return (
    <Box component="footer">
      <Divider />
      <Typography variant="body2" sx={{ textAlign: 'center', py: 1.5, color: 'text.secondary' }}>
        © 2026 NaniteLink Admin
      </Typography>
    </Box>
  )
}
