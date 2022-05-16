import React from "react"
import { NextComponentType } from "next"
import NavItem from '@/components/atoms/NavItem'

const Navigation = () => (
  <nav className= 'mx-5 align-self: center;' >
    <ul className= 'flex justify-center' >
      <NavItem 
        destination = '/posts/about'
        pageTitle = 'About' />
        <NavItem 
        destination = '/works'
        pageTitle = 'Works' />
      <NavItem 
        destination = '/other'
        pageTitle = 'Other' />
    </ul>
  </nav>
)
export default Navigation