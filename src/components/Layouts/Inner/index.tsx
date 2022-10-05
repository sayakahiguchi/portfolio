import React from 'react'

type Props = {
  children?: React.ReactNode
}

const Inner: React.FC<Props> = ({ children }: Props) => {
  return <div className="inner px-[5.33vw]"> {children} </div>
}

export default Inner
