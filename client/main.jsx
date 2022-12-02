import { MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import GlobalStyles from './GlobalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
      <GlobalStyles />
      {/* <Provider> */}
      <Router>
        <App />
      </Router>
      {/* </Provider> */}
    </MantineProvider>
  </React.StrictMode>
)
