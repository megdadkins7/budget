import React from 'react';
import { ThemeProvider } from 'styled-components';

import SubCategory from './components/SubCategory';

import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <SubCategory />
      </>
    </ThemeProvider>
  );
}

export default App;
