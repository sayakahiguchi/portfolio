import { useRouter } from 'next/router'
import type { NextPageWithLayout } from '../_app'
import ErrorPage from 'next/error'
import * as React from 'react'
import { getPostBySlug, getAllPosts } from '@/common/lib/api'
import markdownToHtml from '@/common/lib/markdownToHtml'
import PostType from '@/common/types/post'
import Layout from '@/components/Layouts'
import Header from '@/components/Layouts/Header'
import Meta from '@/components/Layouts/Meta'
import PostBody from '@/components/Layouts/PostBody'
import PostHeader from '@/components/Layouts/PostHeader'
import PostTitle from '@/components/atoms/PostTitle'
import MoreStories from '@/components/molecules/MoreStories'

type Props = {
  allPosts: PostType[]
  post: PostType
  preview: boolean
  postIndex: number
}

const Post: NextPageWithLayout<Props> = ({
  allPosts,
  post,
  postIndex,
  preview,
}: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <>
      <Meta />
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
    </>
  )
}

Post.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tags',
  ])

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
      allPosts,
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
