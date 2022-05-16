import Header from '@/components/Layouts/Header'
import Meta from '@/components/Layouts/Meta'
import Footer from '@/components/Layouts/Footer'
import { CMS_NAME } from '@/common/lib/constants'
import { Html } from 'next/document'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
    <main className = "min-h-screen" >
    <article>
    { children }
    < /article>
    < /main>
    < Footer />
    </>
  )
}

export default Layout