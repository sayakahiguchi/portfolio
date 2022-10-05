import * as React from 'react'
import { gridRecipie, gridVariants } from './index.css'

type Props = {
  children?: React.ReactNode
  element: string
  display?: string
  direction?: string
  justifyContent?: string
  alignContent?: string
  alignItems?: string
  gap?: string
  gridAutoFlow?: string
  wrap?: string
  basis?: string
  className?: string
} & gridVariants

const Grid: React.FC<Props> = ({
  children,
  element,
  display,
  direction,
  justifyContent,
  alignContent,
  alignItems,
  gap,
  gridAutoFlow,
  wrap,
  basis,
  className,
}: Props) => {
  if (element === 'ul') {
    return (
      <>
        <ul
          className={`${gridRecipie({
            display,
            direction,
            justifyContent,
            alignContent,
            alignItems,
            gap,
            gridAutoFlow,
            wrap,
            basis,
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
          className={`${gridRecipie({
            display,
            direction,
            justifyContent,
            alignContent,
            alignItems,
            gap,
            gridAutoFlow,
            wrap,
            basis,
          })} ${className || ''}`}
        >
          {children}
        </li>
      </>
    )
  } else {
    return (
      <>
        <div
          className={`${gridRecipie({
            display,
            direction,
            justifyContent,
            alignContent,
            alignItems,
            gap,
            gridAutoFlow,
            wrap,
            basis,
          })} ${className || ''}`}
        >
          {children}
        </div>
      </>
    )
  }
}
export default Grid
