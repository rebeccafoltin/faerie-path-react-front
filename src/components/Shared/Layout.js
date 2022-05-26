import React from 'react'

import Nav from './Nav'
import Footer from './Footer'

const Layout = props => (
  <div>
    <h1>Online Database for Faeries</h1>
    <h2>Don't be afraid to walk the Faerie path.</h2>
    <Nav />

    {props.children}

    <Footer />
  </div>
)

export default Layout