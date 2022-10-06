import * as React from 'react'
import { mainStyle } from './Layout.css'
import { CMS_NAME } from '@/common/lib/constants'
import Footer from '@/components/Layouts/Footer'
import Header from '@/components/Layouts/Header'
import Meta from '@/components/Layouts/Meta'

type Props = {
  children: React.ReactNode
  preview?: boolean
}

const Layout: React.FC<Props> = ({ children, preview }: Props) => {
  return (
    <>
      <main className={mainStyle}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
