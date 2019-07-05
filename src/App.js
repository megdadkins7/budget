import React from 'react'
import { ThemeProvider } from 'styled-components'

import Category from './components/Category'

import GlobalStyles from './styles/GlobalStyles'
import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Category />
      </>
    </ThemeProvider>
  )
}

export default App
