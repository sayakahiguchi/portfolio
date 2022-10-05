import type { NextPage } from 'next'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import * as React from 'react'
import { getPostBySlug, getAllPosts } from '@/common/lib/api'
import { CMS_NAME } from '@/common/lib/constants'
import markdownToHtml from '@/common/lib/markdownToHtml'
import PostType from '@/common/types/post'
import Layout from '@/components/Layouts'
import Header from '@/components/Layouts/Header'
import Meta from '@/components/Layouts/Meta'
import PostBody from '@/components/Layouts/PostBody'
import PostHeader from '@/components/Layouts/PostHeader'
import Wrapper from '@/components/Layouts/Wrapper'
import PostTitle from '@/components/atoms/PostTitle'

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
    <Layout preview={preview}>
      <Header />
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <article>
          <Meta pageTitle={post.title} pageImg={post.ogImage.url} />
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={post.content} />
        </article>
      )}
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
