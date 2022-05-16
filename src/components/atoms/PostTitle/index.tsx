import React from 'react'

type Props = {
  children?: React.ReactNode
}

const PostTitle: React.FC<Props> = ({ children }: Props) => {
  return (
    <h2 className= "text-5xl md:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left" >
      { children }
    </h2>
  )
}

export default PostTitle
