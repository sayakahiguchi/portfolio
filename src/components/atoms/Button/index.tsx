import Link from 'next/link'
import * as React from 'react'
import buttonStyle, { buttonRecipie, buttonVariants } from './Button.css'

type Props = {
  text?: string
  path?: string
  link?: string
  slug?: string
  as?: string
  className?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  type: 'button' | 'submit' | 'reset'
} & buttonVariants

const Button: React.FC<Props> = ({
  path,
  link,
  as,
  slug,
  text,
  type,
  color,
  display,
  className,
  rounded,
  float,
  onClick,
}: Props) => {
  return (
    <div className={buttonStyle.container}>
      <button
        className={`${buttonRecipie({
          color,
          display,
          rounded,
          float,
        })} ${className || ''}`}
        type={type}
        onClick={onClick}
      >
        {link ? (
          <Link as={path} href={link}>
            <a className={buttonStyle.link}>{text}</a>
          </Link>
        ) : (
          text
        )}
      </button>
    </div>
  )
}

export default Button
