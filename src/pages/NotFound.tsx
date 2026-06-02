import { Box, Link, Typography } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const MAVEN_PRO = "'Maven Pro', sans-serif"

const notFoundTheme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontFamily: MAVEN_PRO,
          color: '#ececec',
          fontWeight: 900,
          fontSize: 276,
          margin: 0,
          position: 'absolute',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        h2: {
          fontFamily: MAVEN_PRO,
          fontSize: 46,
          color: '#000',
          fontWeight: 900,
          textTransform: 'uppercase',
          margin: 0,
          textAlign: 'center',
        },
        h4: {
          fontFamily: MAVEN_PRO,
          fontSize: 15,
          color: '#000',
          fontWeight: 400,
          textTransform: 'uppercase',
          marginTop: 15,
          textAlign: 'center',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: MAVEN_PRO,
          fontSize: 14,
          textDecoration: 'none',
          textTransform: 'uppercase',
          background: '#189cf0',
          display: 'inline-block',
          padding: '16px 38px',
          border: '2px solid transparent',
          borderRadius: '40px',
          color: '#fff',
          fontWeight: 400,
          transition: '0.2s all',
          '&:hover': {
            backgroundColor: '#fff',
            borderColor: '#189cf0',
            color: '#189cf0',
          },
        },
      },
    },
  },
})

export default function NotFound() {
  return (
    <ThemeProvider theme={notFoundTheme}>
      <Box sx={{ boxSizing: 'border-box', width: '100%', height: '80vh' }}>
        <Box
          sx={{
            boxSizing: 'border-box',
            position: 'relative',
            lineHeight: 1.4,
            textAlign: 'center',
            width: '100%',
            left: '50%',
            top: '50%',
            pl: 15,
            pr: 15,
            transform: 'translate(-50%, -12%)',
          }}
        >
          <Box
            sx={{
              boxSizing: 'border-box',
              position: 'absolute',
              height: 100,
              top: 0,
              left: '50%',
              zIndex: -1,
              transform: 'translateX(-50%)',
            }}
          >
            <Typography variant="h1">404</Typography>
          </Box>
          <Typography variant="h2">We are sorry, Page not found!</Typography>
          <Typography variant="h4">
            The page you are looking for might have been removed had its name changed or is temporarily unavailable.
          </Typography>
          <Link href="/">Back To Homepage</Link>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
