import React from 'react'
import { paragraphStyles } from './Paragraph.css'

interface Props {
  children?: React.ReactNode
}

const Paragraph: React.FC<Props> = ({ children }: Props) => {
  return <p className={paragraphStyles}>{children}</p>
}
export default Paragraph
