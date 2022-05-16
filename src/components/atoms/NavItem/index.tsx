import React from 'react'
import Link from 'next/link'
import classNames from 'classnames';

interface Props {
  destination: string;
  pageTitle: string;
}

const NavItem: React.FC<Props> = ({ destination, pageTitle }: Props) => {
  return (
    <li className= 'px-2 font-bold' >
      <Link href={ destination }>
        { pageTitle }
      </Link>
    </li>
  )
}

export default NavItem