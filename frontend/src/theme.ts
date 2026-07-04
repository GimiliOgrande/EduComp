import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#06b6d4', // Cyan
      light: '#67e8f9',
      dark: '#0891b2',
      contrastText: '#0f172a',
    },
    secondary: {
      main: '#8b5cf6', // Violet
      light: '#a78bfa',
      dark: '#7c3aed',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0b0f19', // Deep Dark Slate
      paper: '#151b2c', // Slightly lighter slate
    },
    text: {
      primary: '#f8fafc',
      secondary: '#94a3b8',
    },
    divider: '#1e293b',
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 500,
    },
    subtitle1: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
    },
    subtitle2: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
    },
    body1: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      lineHeight: 1.6,
    },
    button: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '8px 16px',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 12px rgba(6, 182, 212, 0.15)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#151b2c',
          border: '1px solid #1e293b',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default theme;
