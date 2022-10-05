import * as React from 'react'
import { moreStories } from './MoreStories.css'
import Post from '@/common/types/post'
import Inner from '@/components/Layouts/Inner'
import PostPreview from '@/components/molecules/PostPreview'

type Props = {
  allPosts: Post[]
  posts: Post[]
  hero?: string
}

const MoreStories: React.FC<Props> = ({ allPosts, posts, hero }: Props) => {
  return (
    <section>
      <h3 className={moreStories.title}>blog</h3>
      <Inner>
        <div className={moreStories.container}>
          {posts
            .filter((post) => post.slug === hero)
            .map((post, slug) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            ))}
          {posts
            .filter((post) => post.slug !== hero)
            .map((post, slug) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            ))}
        </div>
      </Inner>
    </section>
  )
}

export default MoreStories
