import { Box, Link, TextField, Typography, styled } from '@mui/material'

export const MainContainer = styled(Box)({
  display: 'flex',
  height: '100%',
  gap: '16px',
  paddingLeft: '16px',
})

export const MenuPanelRoot = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  backgroundImage: '-webkit-linear-gradient(top, #eee, #ddd 18px, #ccc 18px, #ddd 33px)',
  backgroundColor: '#ddd',
  borderRadius: '5px',
  boxShadow: '1px 1px 1px #999',
  height: '100%',
  boxSizing: 'border-box',
  overflow: 'hidden',
  verticalAlign: 'top',
  position: 'relative',
  padding: '10px',
  minWidth: '300px',
})

export const MenuPanelHeader = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '5px',
})

export const MenuPanelTitle = styled(Typography)({
  fontSize: '16px',
  fontWeight: 600,
  color: '#000',
})

export const MenuPanelContent = styled(Box)({
  flexGrow: 1,
  backgroundColor: '#fff',
  border: '1px solid #999',
  borderRadius: '5px',
  padding: '8px',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
})

export const MenuPanelActions = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '5px',
})

export const CloseIcon = styled(Link)({
  marginLeft: 'auto',
  cursor: 'pointer',
  fontSize: '18px',
})

export const FormContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  padding: '16px',
  backgroundColor: '#f5f5f5',
  borderRadius: '5px',
})

export const FormField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    height: '32px',
    fontSize: '13px',
  },
})
