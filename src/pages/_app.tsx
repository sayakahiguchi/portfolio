import { ThemeProvider } from 'next-themes'
import type { NextPage } from 'next'
import { AppProps } from 'next/app'
import * as React from 'react'
import { darkTheme } from '@/styles/themes/dark.css'
import { lightTheme } from '@/styles/themes/light.css'
import '../styles/global.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <ThemeProvider
      attribute="class"
      value={{
        light: lightTheme,
        dark: darkTheme,
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
