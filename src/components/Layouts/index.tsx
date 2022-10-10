import * as React from 'react'
import { mainStyle } from './Layout.css'
import { CMS_NAME } from '@/common/lib/constants'
import Meta from '@/components/Layouts/Meta'
import Header from '@/components/Layouts/Header'
import Footer from '@/components/Layouts/Footer'

type LayoutProps = {
  children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <>
      <main className={mainStyle}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
