import React from 'react'
import PostPreview from '@/components/molecules/PostPreview'
import Post from '@/common/types/post'

type Props = {
  posts: Post[]
}

const MoreStories: React.FC<Props> = ({ posts }: Props) => {
  return (
    <section>
    <h3 className= "heading" >
    blog
    < /h3>
    < div className = "grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32" >
    {
      posts.map((post) => (
        <PostPreview
            key= { post.slug }
            title = { post.title }
            coverImage = { post.coverImage }
            date = { post.date }
            author = { post.author }
            slug = { post.slug }
            excerpt = { post.excerpt }
        />
        ))
    }
      < /div>
      < /section>
  )
}

export default MoreStories