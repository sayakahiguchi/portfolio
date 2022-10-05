import * as React from 'react'
import { wrapperStyle } from './index.css'

type Props = {
  children?: React.ReactNode
  title?: string
}

const Wrapper: React.FC<Props> = ({ children, title }: Props) => {
  return (
    <section className={wrapperStyle.wrapper}>
      {title ? <h2 className={wrapperStyle.title}>{title}</h2> : ''}
      {children}
    </section>
  )
}

export default Wrapper
