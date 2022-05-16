import React from 'react'
import Thumbnail from '@/components/atoms/Thumbnail'

type Props = {
  title: string;
  media: string;
  description: string;
}

const Card: React.FC<Props> = ({ title, media, description }:Props) => {
  return (
    <li className= 'flex flex-col' >
      <h3 className='text-base font-normal mb-0 mt-4  order-2 subheading' > { title } </h3>
      <p  className = 'order-3 font-bold mx-0 mt-auto mb-0' > { description } </p>
      <Thumbnail src = { media } />
    </li>
  )
}

export default Card