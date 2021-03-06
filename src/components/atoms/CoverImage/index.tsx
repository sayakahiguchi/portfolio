import React from 'react'
import cn from 'classnames'
import Link from 'next/link'

type Props = {
  title?: string
  src?: string
  slug?: string
}

const CoverImage: React.FC<Props> = ({ title, src, slug }: Props) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn(
        'h-full max-h-80 w-full object-scale-down object-center	 drop-shadow-sm',
        {
          'transition-shadow duration-200 hover:shadow-lg': slug,
        }
      )}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
