import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name='description' content='Giulia Ye Portfolio' />

          <meta name='theme-color' content='#9F7AEA' />
          <link rel='icon' href='/icon.ico' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
