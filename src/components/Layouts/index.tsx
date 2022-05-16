import Header from '@/components/Layouts/Header'
import Meta from '@/components/Layouts/Meta'
import Footer from '@/components/Layouts/Footer'
import { CMS_NAME } from '@/common/lib/constants'
import { Html } from 'next/document'
import React from 'react'

type Props = {
  children: React.ReactNode
  preview?: boolean
}

const Layout: React.FC<Props> = ({ children,preview }: Props) => {
  return (
    <>
      <main className="min-h-screen" >
        <article>
          { children }
        </article>
      </main>
      <Footer/>
    </>
  )
}

export default Layout