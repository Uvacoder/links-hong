import { ColorScheme, Global, MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import React from 'react'

import Layout from '@/components/Layout'

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily:
          'Sora,Noto Sans TC,Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
        primaryColor: 'red',
        breakpoints: {
          xs: 375,
          sm: 640,
          md: 768,
          lg: 1024,
          xl: 1280,
        },
      }}
    >
      <Global
        styles={() => ({
          html: {
            scrollBehavior: 'smooth',
          },
          '::selection': {
            background: 'rgb(249, 6, 6, 0.05)',
            color: '#f90606',
          },
          '::-webkit-scrollbar': {
            width: 7,
            height: 5,
          },
          '::-webkit-scrollbar-thumb': {
            background: '#ef4444',
            transition: '0.25s',
            borderRadius: 2,
          },
          '::-webkit-scrollbar-track': {
            background: '0 0',
          },
          'input:-webkit-autofill, input:-webkit-autofill:focus': {
            transition: 'background-color 600000s 0s, color 600000s 0s',
          },
        })}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  )
}
