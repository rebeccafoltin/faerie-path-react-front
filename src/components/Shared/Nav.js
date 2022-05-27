import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav>
    <NavLink to='/src/components/Shared/Homepage.js'>Home</NavLink>
    <NavLink to='/src/components/Shared/FaerieForm.js'>Faeries</NavLink>
    <NavLink to='/src/components/Faeries/CreateFaerie.js'>Create a Faerie!</NavLink>
  </nav>
)

export default Nav