import React from 'react'
import { ThemeProvider } from 'styled-components'

import Category from './components/Category'
import Overview from './components/Overview'

import GlobalStyles from './styles/GlobalStyles'
import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Category />
        <Overview />
      </>
    </ThemeProvider>
  )
}

export default App
