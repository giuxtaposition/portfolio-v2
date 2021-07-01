import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout'
import { Chakra } from '../styles/theme/colorModeManager'
import { globalTheme } from '../styles/theme/'

import React from 'react'
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  split,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import { getMainDefinition } from '@apollo/client/utilities'
import { WebSocketLink } from '@apollo/client/link/ws'

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('library-user-token')
  return {
    headers: { ...headers, authorization: token ? `bearer ${token}` : null },
  }
})

const httpLink = new HttpLink({ uri: 'http://localhost:3001/graphql' })

const wsLink = process.browser
  ? new WebSocketLink({
      uri: `ws://localhost:3001/graphql`,
      options: { reconnect: true },
    })
  : null

const splitLink = process.browser
  ? split(
      ({ query }) => {
        const definition = getMainDefinition(query)
        return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
        )
      },
      wsLink!,
      authLink.concat(httpLink)
    )
  : httpLink

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Chakra cookies={pageProps.cookies} theme={globalTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Chakra>
    </ApolloProvider>
  )
}
export default MyApp

export { getServerSideProps } from '../styles/theme/colorModeManager'
