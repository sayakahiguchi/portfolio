import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Meta from '@/components/Layouts/Meta'
import Header from '@/components/Layouts/Header'
import Layout from '@/components/Layouts'
import Wrapper from '@/components/Layouts/Wrapper'
import Container from '@/components/Layouts/Container'
import PostHeader from '@/components/Layouts/PostHeader'
import PostTitle from '@/components/atoms/PostTitle'
import PostBody from '@/components/Layouts/PostBody'
import { getPostBySlug, getAllPosts } from '@/common/lib/api'
import { CMS_NAME } from '@/common/lib/constants'
import markdownToHtml from '@/common/lib/markdownToHtml'
import PostType from '@/common/types/post'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview} >
      <Header />
      <Wrapper>
        {
          router.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <Meta
                pageTitle={post.title}
                pageImg={post.ogImage.url} />
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <Container>
                <PostBody content={post.content} />
              </Container>
            </>
          )}
      </Wrapper>
    </Layout>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}