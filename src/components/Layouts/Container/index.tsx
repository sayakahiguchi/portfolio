import * as React from "react";

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent = ({ children }: Props) => {
  return (
    <section className= "text-base max-w-prose mx-auto px-5 " > { children } < /section>
  )
}

export default Container