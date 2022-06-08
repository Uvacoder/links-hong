import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="zh-TW">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content="Front-end developer, YouTuber." />
        <meta property="og:url" content="https://link.honghong.me/" />
        <link rel="canonical" href="https://link.honghong.me/"></link>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="小康的 Social Media" />
        <meta property="og:description" content="Front-end developer, YouTuber." />
        <meta property="og:title" content="小康 – Developer, YouTuber" />
        <meta property="og:image" content="https://link.honghong.me/static/images/banner.png" />
        <meta property="og:image:alt" content="Front-end developer, YouTuber." />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="zh-TW" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TszhongLai0411" />
        <meta name="twitter:title" content="小康 – Developer, YouTuber | Link" />
        <meta name="twitter:description" content="Front-end developer, YouTuber." />
        <meta name="twitter:image" content="https://link.honghong.me/static/images/banner.png" />
        <meta name="twitter:creator" content="@TszhongLai0411" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/static/favicons/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/static/favicons/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/static/favicons/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/static/favicons/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/static/favicons/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/static/favicons/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/static/favicons/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/static/favicons/apple-touch-icon-152x152.png"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
        <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#373737" />
        <link rel="shortcut icon" href="/static/favicons/favicon.ico?v=2" />
        <meta name="apple-mobile-web-app-title" content="小康" />
        <meta name="application-name" content="小康" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/static/favicons/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/static/manifest.json" />
        <script
          async
          defer
          data-website-id="f21b09bd-21de-42de-bb40-78b7bc9fcb79"
          src="https://umami.honghong.me/umami.js"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
