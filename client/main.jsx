import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { Auth0ProviderWithRedirectCallback } from './utils/auth'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Auth0ProviderWithRedirectCallback>
      <QueryClientProvider client={client}>
        <App />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Auth0ProviderWithRedirectCallback>
  </BrowserRouter>
)
