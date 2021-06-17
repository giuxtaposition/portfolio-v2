import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout'
import { Chakra } from '../styles/theme/colorModeManager'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  )
}
export default MyApp

export { getServerSideProps } from '../styles/theme/colorModeManager'
