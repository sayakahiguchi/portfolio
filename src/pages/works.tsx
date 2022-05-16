import React from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router'
import Meta from '@/components/Layouts/Meta'
import Header from '@/components/Layouts/Header'
import Layout from '@/components/Layouts'
import PageHeader from '@/components/Layouts/PageHeader'
import Wrapper from '@/components/Layouts/Wrapper'
import CardList from '@/components/molecules/CardList'
import { allworks } from '@/common/lib/works'
import Work from '@/common/types/works';


type Props = {
  allworks: Work[]
  pageTitle: string;
};

const Works = ({ allworks }: Props) => {
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
          <CardList works={allworks} />
        </Wrapper>
      </Layout>
    </>
  )
}


export const getStaticProps = async () => {
  return {
    props: {
      allworks
    },
  };
}

export default Works