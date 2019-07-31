import React from 'react'
import { ThemeProvider } from 'styled-components'

import Category from './components/Category'
import SummaryPage from './components/SummaryPage'

import GlobalStyles from './styles/GlobalStyles'
import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Category />
        <SummaryPage />
      </>
    </ThemeProvider>
  )
}

export default App
