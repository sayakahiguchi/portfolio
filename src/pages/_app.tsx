import { ThemeProvider } from 'next-themes'
import { AppProps } from 'next/app'
import * as React from 'react'
import { darkTheme } from '@/styles/themes/dark.css'
import { lightTheme } from '@/styles/themes/light.css'
import '../styles/global.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
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
