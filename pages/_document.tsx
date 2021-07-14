import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name='description' content='Giulia Ye Portfolio' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
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
