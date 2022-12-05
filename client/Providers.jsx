import { ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import GlobalStyles from './GlobalStyles'
import { getTheme } from './theme'

function Provider() {
  const [colorScheme, setColorScheme] = useState('light')
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        theme={getTheme(colorScheme)}
      >
        <GlobalStyles />
        <Router>
          <App />
        </Router>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default Provider
