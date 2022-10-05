import Link from 'next/link'
import * as React from 'react'
import { heroPostStyles } from './HeroPost.css'
import Author from '@/common/types/author'
import Avatar from '@/components/atoms/Avatar'
import Button from '@/components/atoms/Button'
import CoverImage from '@/components/atoms/CoverImage'
import DateFormatter from '@/components/functional/date-formatter'

type Props = {
  title?: string
  coverImage?: string
  date?: string
  excerpt?: string
  author?: Author
  slug?: string
}

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section className={heroPostStyles.container}>
      <h3 className={heroPostStyles.title}>
        <Link as={`/posts/${slug}`} href={`/posts/${slug}`}>
          <a>{title}</a>
        </Link>
      </h3>
      <p className={heroPostStyles.paragraph}>{excerpt}</p>
      <Button
        text="read more"
        link={`/posts/${slug}`}
        as={`/posts/${slug}`}
        type="button"
        display="block"
        color="accent"
      />
    </section>
  )
}

export default HeroPost
