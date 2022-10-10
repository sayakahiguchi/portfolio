import Link from 'next/link'
import * as React from 'react'
import { navItemStyles } from './NavItem.css'
import { useScroll } from '@/common/utils/useScroll'

interface Props {
  destination: string
  pageTitle: string
}

const NavItem: React.FC<Props> = ({ destination, pageTitle }: Props) => {
  const [scrollRef, moveTo] = useScroll()

  return (
    <li className={navItemStyles}>
      <Link href={`${destination}`}>
        <a onClick={moveTo}>{pageTitle}</a>
      </Link>
    </li>
  )
}

export default NavItem
