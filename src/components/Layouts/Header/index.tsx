import React from 'react'
import { CMS_NAME } from '@/common/lib/constants'
import Link from 'next/link'
import Navigation from '@/components/molecules/Navigation'


const Header = () => {
  return (
    <header className= 'flex justify-between content-center px-5 mb-20 mt-8 mr-auto ml-auto max-w-7xl flex-col md:flex-row' >
    <h1 className= "text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight self-center" >
      <Link href="/" >
        <a className="hover:underline" > { CMS_NAME } < /a>
          < /Link>
          < /h1>
          < Navigation />
          </header>
  )
}

export default Header