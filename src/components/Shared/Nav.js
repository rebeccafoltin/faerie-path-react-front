import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/faeries'>Faeries</NavLink>
    <NavLink to='/create-faeries'>Create a Faerie!</NavLink>
  </nav>
)

export default Nav