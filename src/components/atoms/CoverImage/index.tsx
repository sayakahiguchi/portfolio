import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import { coverImageStyles } from './CoverImage.css'

type Props = {
  title?: string
  src: string
  slug?: string
}

const CoverImage: React.FC<Props> = ({ title, src, slug }: Props) => {
  const image: JSX.Element = (
    <Image
      className={coverImageStyles.content}
      src={src}
      alt={`Cover Image for ${title}`}
      objectFit="cover"
      objectPosition="center"
      layout="fill"
    />
  )
  return (
    <div className={coverImageStyles.wrapper}>
      {slug ? (
        <Link as={`/posts/${slug}`} href={`/posts/${slug}`}>
          <a aria-label={title}> {image} </a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
