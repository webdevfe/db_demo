import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import './css/App.css';
import Tables from './app/Tables';
const App = () => {
  return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Tables />
        </ThemeProvider>
  );
};

const theme = createMuiTheme({
  palette: {
    type: 'light',
    base: {
      background: '#e9e9e9',
      borderColor: '#e2e2e2'
    },
    primary: {
      main: '#0d5eb6',
      dark: '#084282',
      light: '#1368c5'
    },
    secondary: {
      main: '#41ac34',
      dark: '#328028',
      light: '#46b538'
    }
  },
  typography: {
    button: {
      textTransform: 'capitalize'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        primary: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
        }
      }
    }
  }
});

export default App;
