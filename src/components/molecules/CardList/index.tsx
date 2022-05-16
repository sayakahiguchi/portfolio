import React from 'react'
import Work from '@/common/types/works'
import { works } from '@/common/lib/works'
import Card from '@/components/molecules/Card'
import { GetStaticProps } from 'next';

type Props = {
  work: Work[]
};

const CardList: React.FC<Props> = ({ work }: Props) => {
  return (
    <>
    <ul className = 'grid md:grid-cols-4 gap-x-6 gap-y-8 md:gap-y-10 items-stretch' >
    {
      works.map((work) => (
        <Card
        title = { work.title }
        media = { work.image }
        description = { work.description }
        />
      ))
    }
    < /ul>
    < />
  )
}

export default CardList