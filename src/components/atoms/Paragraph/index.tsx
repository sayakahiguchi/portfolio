import React from "react";

interface Props {
  children?: React.ReactNode;
}

const Paragraph: React.FC<Props> = ({ children }: Props) => {
  return (
    <p className= "text-base" >
    { children }
    </p>
  )
}
export default Paragraph