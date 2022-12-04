import { MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

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
      <App />
    </MantineProvider>
  </React.StrictMode>
)
