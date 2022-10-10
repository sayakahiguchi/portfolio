import type { NextPageWithLayout } from './_app'
import React from 'react'
import { useWindowSize } from '@/common/utils/useWindowSize'
import { useScroll } from '@/common/utils/useScroll'
import { getAllPosts } from '@/common/lib/api'
import { works } from '@/common/lib/works'
import Post from '@/common/types/post'
import Target from '@/common/types/targets'
import Work from '@/common/types/works'
import Layout from '@/components/Layouts'
import Container from '@/components/Layouts/Container'
import Header from '@/components/Layouts/Header'
import Meta from '@/components/Layouts/Meta'
import Wrapper from '@/components/Layouts/Wrapper'
import GridItem from '@/components/atoms/GirdItem'
import Icon from '@/components/atoms/Icon'
import Code from '@/components/atoms/Icons/Code'
import Monitor from '@/components/atoms/Icons/Monitor'
import CardList from '@/components/molecules/CardList'
import Grid from '@/components/molecules/Grid'
import Profile from '@/components/molecules/Profile'
import Intro from '@/components/molecules/Intro'
import MoreStories from '@/components/molecules/MoreStories'

type Props = {
  allPosts: Post[]
  works: Work[]
  target: Target[]
}

const Index: NextPageWithLayout<Props> = ({ allPosts, works }: Props) => {
  const { windowHeight, windowWidth } = useWindowSize()
  const width_medium = 768,
    width_large = 1024,
    width_xlarge = 1200
  const heroPost = allPosts.find(({ slug }) => slug === 'about')
  const morePosts = allPosts.slice(0)
  return (
    <>
      <Meta />
      <Header />
      <article>
        <Intro />
        <Wrapper title="works" id="works">
          <Container>
            {works.length > 0 && <CardList works={works} />}
          </Container>
        </Wrapper>
        <Wrapper title="what I can do">
          <Container>
            <Grid
              element="ul"
              display="flex"
              justifyContent="spaceEvenly"
              direction={windowWidth > width_large ? 'row' : 'column'}
            >
              <Grid
                element="li"
                alignItems="center"
                basis="1/2"
                display="flex"
                direction="column"
                justifyContent="center"
              >
                <GridItem element="div" order={2}>
                  <h4>Design</h4>
                  <p>Web、バナー(サイト内・広告用)、ロゴ</p>
                </GridItem>
                <GridItem element="div" order={1}>
                  <Icon element="div" svg src="/" size="xlarge">
                    <Monitor />
                  </Icon>
                </GridItem>
              </Grid>
              <Grid
                element="li"
                alignItems="center"
                basis="1/2"
                display="flex"
                direction="column"
                justifyContent="center"
              >
                <GridItem element="div" order={2}>
                  <h4>Web development</h4>
                  <p>LP, WordPress, EC-CUBE, Shopify</p>
                </GridItem>
                <GridItem element="div" order={1}>
                  <Icon element="div" svg src="/" size="xlarge">
                    <Code />
                  </Icon>
                </GridItem>
              </Grid>
            </Grid>
          </Container>
        </Wrapper>
        <Wrapper id="about" title="about me">
          <Profile />
        </Wrapper>
        {morePosts.length > 0 && (
          <MoreStories allPosts={allPosts} posts={morePosts} hero="about" />
        )}
      </article>
    </>
  )
}

Index.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <>
      <Layout>{page}</Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tags',
  ])

  return {
    props: {
      allPosts,
      works,
    },
  }
}
