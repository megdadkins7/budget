import React from 'react';
import { ThemeProvider } from 'styled-components';

import Entry from './components/Entry';

import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Entry title="Oliver Smith Show" amount={37.50} />
      </>
    </ThemeProvider>
  );
}

export default App;
