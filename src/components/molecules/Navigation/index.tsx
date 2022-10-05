import * as React from 'react'
import { navigationtyles } from './Navigation.css'
import { Menu } from '@/common/lib/menu'
import NavItem from '@/components/atoms/NavItem'

const Navigation: React.FC = () => {
  return (
    <nav className={navigationtyles.container}>
      <ul className={navigationtyles.content}>
        {Menu.map((item, index) => (
          <NavItem
            destination={item.destination}
            pageTitle={item.title}
            key={index}
          />
        ))}
      </ul>
    </nav>
  )
}
export default Navigation
