import React from 'react'
import { ThemeProvider } from 'styled-components'

import SubCategory from './components/SubCategory'

import GlobalStyles from './styles/GlobalStyles'
import { theme } from './styles/theme'
import CategoryProgress from './components/CategoryProgress'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <CategoryProgress amount={138} budget={307} />
        <SubCategory />
      </>
    </ThemeProvider>
  )
}

export default App
