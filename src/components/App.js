import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Entry from './Entry';
import { theme } from '../styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Entry title="Oliver Smith Show" amount="37.50" />
      </>
    </ThemeProvider>
  );
}

export default App;
