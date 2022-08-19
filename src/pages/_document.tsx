import { createGetInitialProps } from '@mantine/next'
import Document, { Head, Html, Main, NextScript } from 'next/document'

const getInitialProps = createGetInitialProps()

export default class _Document extends Document {
  static getInitialProps = getInitialProps

  render() {
    return (
      <Html lang='zh-TW'>
        <Head>
          <script
            async
            defer
            data-website-id='f21b09bd-21de-42de-bb40-78b7bc9fcb79'
            src='https://umami.honghong.me/umami.js'
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
