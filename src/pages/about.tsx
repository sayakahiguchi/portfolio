import * as React from 'react'
import Layout from '@/components/Layouts'
import Header from '@/components/Layouts/Header'
import Meta from '@/components/Layouts/Meta'
import PageHeader from '@/components/Layouts/PageHeader'

const About = () => {
  return (
    <>
      <Meta />
      <Layout>
        <Header />
        <article>
          <PageHeader pageTitle="About" pageImg="/" />
        </article>
      </Layout>
    </>
  )
}
export default About
