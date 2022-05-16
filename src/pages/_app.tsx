import React from 'react'
import { AppProps } from 'next/app'
import { PageTransition } from 'next-page-transitions'
import Loader from '@/components/atoms/Loader'
import 'tailwindcss/tailwind.css'
import '@/styles/index.scss'

const TIMEOUT = 300

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component { ...pageProps } />
}
