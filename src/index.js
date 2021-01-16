import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
// MUI
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#3c44b126',
      main: '#333996',
    },
    secondary: {
      light: '#f8324526',
      main: '#f83245',
    },
    background: {
      default: '#f4f5fd',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
