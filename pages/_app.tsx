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

let httpLinkUri = ''
let wsLinkUri = ''

if (process.env.NODE_ENV !== 'production') {
  httpLinkUri = 'http://localhost:3001/graphql'
  wsLinkUri = 'ws://localhost:3001/graphql'
} else {
  httpLinkUri = 'https://api.giuxtaposition.tech/graphql'
  wsLinkUri = 'wss://api.giuxtaposition.tech/graphql'
}

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('library-user-token')
  return {
    headers: { ...headers, authorization: token ? `bearer ${token}` : null },
  }
})

const httpLink = new HttpLink({ uri: httpLinkUri })

const wsLink = process.browser
  ? new WebSocketLink({
      uri: wsLinkUri,
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
