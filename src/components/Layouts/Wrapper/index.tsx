import * as React from "react";

type Props = {
  children?: ReactNode
}

const Wrapper: FunctionComponent = ({ children }: Props) => {
  return (
    <article className= "xl:container mx-auto px-5 mb-32" > { children } < /article>
  )
}

export default Wrapper