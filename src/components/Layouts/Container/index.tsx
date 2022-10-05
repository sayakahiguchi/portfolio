import * as React from 'react'
import {
  containerStyle,
  containerRecipie,
  containerVariants,
} from './index.css'

type Props = {
  children?: React.ReactNode
  title?: string
  marginMediumVw?: string
  id?: string
  className?: string
} & containerVariants

const Container: React.FC<Props> = ({
  children,
  title,
  marginMediumVw,
  id,
  className,
}: Props) => {
  return (
    <div
      className={`${containerRecipie({
        marginMediumVw,
      })} ${className || ''}`}
      id={id}
    >
      {title ? <h3 className={containerStyle.title}>{title}</h3> : ''}
      {children}
    </div>
  )
}

export default Container
