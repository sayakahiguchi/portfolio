import * as React from 'react'

type Props = {
  children?: React.ReactNode
}

const Wrapper: React.FC<Props> = ({ children }: Props) => {
  return <article className="mx-auto mb-32 xl:container"> {children} </article>
}

export default Wrapper
