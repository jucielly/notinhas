import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#89A1EF',
    secondary: '#F06C9B',
    terciary: '#F3DFA2',
    helper: '#F4F4F6',
    fontColor: '#333',
    placeholder: '#9A9AAC',
    defaultWhite: '#fff',
  },

  fonts: {
    default: 'Roboto, sans-serif;',
    satisfy: 'Satisfy, cursive;',

    fontSizes: {
      S: '1em',
      M: '1.2em',
      L: '2em',
      XL: '3em',
      XXL: '5em',
    },
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
