import Image from 'next/image'
import * as React from 'react'
import IconStyle, { iconRecipie, iconVariants } from './Icon.css'

type Props = {
  children?: React.ReactNode
  element?: 'div' | 'button'
  type?: 'button' | 'submit' | 'reset'
  svg?: boolean
  src: string
  alt?: string
  aspectRatio?: string
  rounded?: boolean
  display?: string
  size?: string
  fill?: string
  className?: string
  onClick?: () => void
} & iconVariants

const Icon: React.FC<Props> = ({
  children,
  element,
  svg,
  src,
  alt,
  type,
  aspectRatio,
  rounded,
  display,
  size,
  onClick,
  className,
}: Props) => {
  if (element === 'button') {
    return (
      <button
        className={`${iconRecipie({
          aspectRatio,
          display,
          rounded,
          size,
        })} ${className || ''}`}
        type={type ? `${type}` : 'button'}
        onClick={onClick}
      >
        {svg === true ? (
          children
        ) : (
          <Image
            src={src}
            className={IconStyle.item}
            alt={alt}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        )}
      </button>
    )
  }
  return (
    <div
      className={`${iconRecipie({
        aspectRatio,
        display,
        rounded,
        size,
      })} ${className || ''}`}
    >
      {svg === true ? (
        children
      ) : (
        <Image
          src={src}
          className={IconStyle.item}
          alt={alt}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      )}
    </div>
  )
}

export default Icon
