import React from 'react'
import Link from 'next/link'
import classNames from 'classnames';

interface Props {
  destination: string;
  pagetitle: string;
}

const NavItem = ( { destination, pageTitle } ) => {
  return (
    <li className='px-2 font-bold'>
      <Link href={ destination }>
        { pageTitle }
      </ Link>
    </li>
  )
}

export default NavItem