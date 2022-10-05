import React from 'react'
import LabelStyle from './Label.css'

type Props = {
  htmlFor: string
  text: string
}

const Label: React.FC<Props> = ({ htmlFor, text }: Props) => {
  return (
    <label className={LabelStyle} htmlFor={htmlFor}>
      {text}
    </label>
  )
}

export default Label
