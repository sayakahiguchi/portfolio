import React from 'react'
import Meta from '@/components/Layouts/Meta'
import Header from '@/components/Layouts/Header'
import MoreStories from '@/components/molecules/MoreStories'
import HeroPost from '@/components/molecules/HeroPost'
import Intro from '@/components/molecules/Intro'
import Layout from '@/components/Layouts'
import Wrapper from '@/components/Layouts/Wrapper'
import { getAllPosts } from '@/common/lib/api'
import { CMS_NAME } from '@/common/lib/constants'
import Post from '@/common/types/post'
import IconList from '@/components/molecules/IconList'
import { skills } from '@/common/lib/skills'
import { tools } from '@/common/lib/tools'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[1]
  const morePosts = allPosts.slice(0)
  return (
    <>
    <Meta/>
    < Layout >
    <Header/>
    < Wrapper >
    <Intro />
  {
    heroPost && (
      <HeroPost
      title={ heroPost.title }
    coverImage = { heroPost.coverImage }
    date = { heroPost.date }
    slug = { heroPost.slug }
    excerpt = { heroPost.excerpt }
      />
    )}
    <section>
    <h3 className="font-heading heading" > Skills < /h3>
    <p> 学習中のものも含みます。</p>
    < ul className = 'flex justify-around flex-wrap	mt-6' >
    {
      skills.map((skill) => (
        <li>
        <div className= 'h-20 w-full' >
        <img
            className='h-full object-contain object-center'
            src = { skill.media }
            alt = { skill.name } />
        </div>
        < /li>
      ))
    }
      </ul>
    </section>
      < h3 className = 'font-heading heading' > tools / apps / CMS / platforms < /h3>
        < ul className = 'list-disc	pl-4' >
        {
          tools.map((tool) => (
            <li>
            { tool }
            < /li>
          ))
        }
          < /ul>

{
  morePosts.length > 0 && <MoreStories posts={ morePosts } />}
    < /Wrapper>
    < /Layout>
    < />
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tags',
  ])

  return {
    props: { allPosts },
  }
}
