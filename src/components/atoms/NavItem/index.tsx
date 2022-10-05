import Link from 'next/link'
import * as React from 'react'
import { navItemStyles } from './NavItem.css'

interface Props {
  destination: string
  pageTitle: string
}

const NavItem: React.FC<Props> = ({ destination, pageTitle }: Props) => {
  return (
    <li className={navItemStyles}>
      <Link href={`${destination}`}>{pageTitle}</Link>
    </li>
  )
}

export default NavItem
