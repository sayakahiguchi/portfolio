import Link from 'next/link'
import * as React from 'react'
import { postPreview } from './PostPreview.css'
import Author from '@/common/types/author'
import Avatar from '@/components/atoms/Avatar'
import CoverImage from '@/components/atoms/CoverImage'
import DateFormatter from '@/components/functional/date-formatter'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt?: string
  author?: Author
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
    <div className={postPreview.wrapper}>
      <h4 className={postPreview.title}>
        <Link as={`/posts/${slug}`} href={`/posts/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h4>
      <p className={postPreview.date}>
        <small>
          <DateFormatter dateString={date} />
        </small>
      </p>
      {excerpt ? <p className={postPreview.excerpt}> {excerpt} </p> : ``}
      <div className={postPreview.media}>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
    </div>
  )
}

export default PostPreview
