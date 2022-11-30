import { ManagementClient } from 'auth0'
import jwt from 'express-jwt'
import jwks from 'jwks-rsa'

const domain = 'https://'
const audience = 'https://'

export const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${domain}/.well-known/jwks.json`,
  }),
  audience: audience,
  issuer: `${domain}/`,
  algorithms: ['RS256'],
})

// https://auth0.github.io/node-auth0/ManagementClient.html
const managementDomain = 'empty-domain'
const managementAudience = 'https://'
const clientId = 'empty-domain'
const clientSecret = process.env.AUTH0_API_SECRET || 'empty-secret'
const scope = 'read:users'

const management = new ManagementClient({
  domain: managementDomain,
  audience: managementAudience,
  clientId,
  clientSecret,
  scope,
  tokenProvider: {
    enableCache: true,
    cacheTTLInSeconds: 10,
  },
})

export async function getUserMetadata(id) {
  const user = await management.getUser({ id })
  return user.user_metadata
}
