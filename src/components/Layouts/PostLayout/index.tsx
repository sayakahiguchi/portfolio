import * as React from 'react'
import postLayoutStyle from './PostLayout.css'
import PostType from '@/common/types/post'
import Meta from '@/components/Layouts/Meta'
import Header from '@/components/Layouts/Header'
import Footer from '@/components/Layouts/Footer'

type PostLayoutProps = Required<{
  children: React.ReactNode
}>

const PostLayout: React.FC<PostLayoutProps> = ({
  children,
}: PostLayoutProps) => {
  return (
    <>
      <Meta />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default PostLayout
