import * as React from 'react'
import { wrapperStyle } from './index.css'
import { useScroll } from '@/common/utils/useScroll'
import { useRef } from 'react'

type Props = {
  children?: React.ReactNode
  id?: string
  title?: string
}

const Wrapper: React.FC<Props> = ({ children, id, title }: Props) => {
  const [scrollRef, moveTo] = useScroll()
  return (
    <section className={wrapperStyle.wrapper} id={id} ref={scrollRef}>
      {title ? <h2 className={wrapperStyle.title}>{title}</h2> : ''}
      {children}
    </section>
  )
}

export default Wrapper
