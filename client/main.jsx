import { MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import GlobalStyles from './GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      theme={{
        fontFamily: 'Noto Sans',
        headings: { fontFamily: 'Noto Sans' },
      }}
    >
      <GlobalStyles />
      <Router>
        <App />
      </Router>
    </MantineProvider>
  </React.StrictMode>
)
