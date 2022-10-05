import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import * as React from 'react'
import { works } from '@/common/lib/works'
import Work from '@/common/types/works'
import Layout from '@/components/Layouts'
import Header from '@/components/Layouts/Header'
import Meta from '@/components/Layouts/Meta'
import PageHeader from '@/components/Layouts/PageHeader'
import Wrapper from '@/components/Layouts/Wrapper'
import CardList from '@/components/molecules/CardList'

type Props = {
  works: Work[]
  pageTitle: string
}

const Works = ({ works }: Props) => {
  const title = 'Works'
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <>
      <Meta pageTitle={title} />
      <Layout>
        <Header />
        <article>
          <h2>製作実績 </h2>
          <Wrapper>
            <CardList works={works} />
          </Wrapper>
        </article>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      works,
    },
  }
}

export default Works
