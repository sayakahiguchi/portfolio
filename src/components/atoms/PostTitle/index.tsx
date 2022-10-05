import React from 'react'
import { postTitleStyle } from './PostTitle.css'

type Props = {
  children?: React.ReactNode
}

const PostTitle: React.FC<Props> = ({ children }: Props) => {
  return <h2 className={postTitleStyle}>{children}</h2>
}

export default PostTitle
