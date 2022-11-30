import { Auth0Provider, withAuthenticationRequired } from '@auth0/auth0-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { FullPageSpinner } from '../components/Spinner'

export function Auth0ProviderWithRedirectCallback({ children }) {
  const navigate = useNavigate()
  function onRedirectCallback(appState) {
    navigate(appState?.returnTo || window.location.pathname)
  }

  return (
    <Auth0Provider
      onRedirectCallback={onRedirectCallback}
      redirectUri={window.location.origin}
      domain=''
      clientId=''
      audience=''
    >
      {children}
    </Auth0Provider>
  )
}

export function ProtectedRoute({ component }) {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <FullPageSpinner text={'Signing in...'} />,
  })

  return <Component />
}
