import React from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router'
import Meta from '@/components/Layouts/Meta'
import Header from '@/components/Layouts/Header'
import Layout from '@/components/Layouts'
import PageHeader from '@/components/Layouts/PageHeader'
import Wrapper from '@/components/Layouts/Wrapper'
import CardList from '@/components/molecules/CardList'
import { works } from '@/common/lib/works'
import Work from '@/common/types/works';


type Props = {
  works: Work[]
  pageTitle: string;
};

const Works = ({ works }: Props) => {
  const title = 'Works';
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <>
      <Meta pageTitle={title} />
      <Layout>
        <Header />
        <Wrapper >
          <PageHeader
            pageTitle={title} />
          <CardList works={works} />
        </Wrapper>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      works
    },
  };
}

export default Works