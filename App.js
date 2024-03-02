import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
// import authoringTheme from './theme/authoringTheme.js';

export default () => {
  const theme = {};
  return <ThemeProvider theme={theme}>Hello</ThemeProvider>;
};
