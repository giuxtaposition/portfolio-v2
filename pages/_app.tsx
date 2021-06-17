import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout'
import { Chakra } from '../styles/theme/colorModeManager'
import { globalTheme } from '../styles/theme/'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies} theme={globalTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  )
}
export default MyApp

export { getServerSideProps } from '../styles/theme/colorModeManager'
