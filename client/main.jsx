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
        colorScheme: 'dark',
        colors: {
          dark: [
            '#fae6ff',
            '#e7b8fb',
            '#d38bf5',
            '#2AC9DE',
            '#b02fe9',
            '#9617d0',
            '#7510a3',
            '#530a75',
            '#330548',
            '#14001c',
          ],

          light: [
            '#dafff0',
            '#adffd8',
            '#7cffc1',
            '#4affa8',
            '#1aff91',
            '#00e678',
            '#00b35c',
            '#008041',
            '#004e26',
            '#001c08',
          ],
        },
      }}
    >
      <GlobalStyles />
      <Router>
        <App />
      </Router>
    </MantineProvider>
  </React.StrictMode>
)
