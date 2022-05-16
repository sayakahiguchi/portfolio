import React from 'react'
import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import '@/styles/index.scss'


const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component { ...pageProps } />
}
export default MyApp