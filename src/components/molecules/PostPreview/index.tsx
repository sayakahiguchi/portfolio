import React from "react"
import Avatar from '@/components/atoms/Avatar'
import DateFormatter from '@/components/functional/date-formatter'
import CoverImage from '@/components/atoms/CoverImage'
import Link from 'next/link'
import Author from '@/common/types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview: React.FC<Props> = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div>
      <div className= "mb-5" >
        <CoverImage slug={ slug } title = { title } src = { coverImage } />
      </div>
      <h4 className = "text-2xl mb-3 leading-snug font-bold" >
        <Link as={ `/posts/${slug}` } href = "/posts/[slug]" >
          <a className="hover:underline" > { title } </a>
        </Link>
      </h4>
      <div className = "text-lg mb-4" >
        <DateFormatter dateString={ date } />
      </div>
      <p className = "text-lg leading-relaxed mb-4" > { excerpt } </p>
    </div>
  )
}

export default PostPreview