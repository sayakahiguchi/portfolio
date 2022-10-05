import Link from 'next/link'
import React from 'react'
import { headerStyles } from './Header.css'
import { CMS_NAME } from '@/common/lib/constants'
import Navigation from '@/components/molecules/Navigation'
import ThemeChanger from '@/components/molecules/ThemeChanger'

const Header = () => {
  return (
    <header className={headerStyles.container}>
      <h1 className={headerStyles.title}>
        <Link href="/">
          <a> {CMS_NAME} </a>
        </Link>
      </h1>
      <Navigation />
      <ThemeChanger/>
    </header>
  )
}

export default Header
