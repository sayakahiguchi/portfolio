import React from "react"
import Link from 'next/link'
import Avatar from '@/components/atoms/Avatar'
import DateFormatter from '@/components/functional/date-formatter'
import CoverImage from '@/components/atoms/CoverImage'
import Author from '@/common/types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
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
    <section>
    <div className= "mb-8 md:mb-16" >
    </div>
    < div className = "md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28" >
      <div>
      <h3 className="mb-4 text-4xl lg:text-5xl leading-tight" >
        <Link as={ `/posts/${slug}` } href = "/posts/[slug]" >
          <a className="hover:underline" > { title } < /a>
            < /Link>
            < /h3>
            < p className = "text-lg leading-relaxed mb-4" > { excerpt } < /p>
              < button className = "button" >
                <Link as={ `/posts/${slug}` } href = "/posts/[slug]" >
                  <a>read more < /a>
                    < /Link>
                    < /button>
                    < /div>
                    < /div>
                    < /section>
  )
}

export default HeroPost