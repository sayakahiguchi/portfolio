import * as React from 'react'
import { gridItemRecipie, gridItemVariants } from './GridItem.css'

type Props = {
  children?: React.ReactNode
  element: string
  basis?: number
  shrink?: number
  grow?: number
  gridColumn?: string
  gridRow?: string
  gap?: string
  order?: number
  className?: string
} & gridItemVariants

const GridItem: React.FC<Props> = ({
  children,
  element,
  basis,
  shrink,
  grow,
  gridColumn,
  gridRow,
  gap,
  order,
  className,
}: Props) => {
  if (element === 'ul') {
    return (
      <>
        <ul
          className={`${gridItemRecipie({
            basis,
            shrink,
            grow,
            gridColumn,
            gridRow,
            gap,
            order,
          })} ${className || ''}`}
        >
          {children}
        </ul>
      </>
    )
  } else if (element === 'li') {
    return (
      <>
        <li
          className={`${gridItemRecipie({
            basis,
            shrink,
            grow,
            gridColumn,
            gridRow,
            gap,
            order,
          })} ${className || ''}`}
        >
          {children}
        </li>
      </>
    )
  } else {
    return (
      <div
        className={`${gridItemRecipie({
          basis,
          shrink,
          grow,
          gridColumn,
          gridRow,
          gap,
          order,
        })} ${className || ''}`}
      >
        {children}
      </div>
    )
  }
}

export default GridItem
