import React from 'react'
import { Link } from 'gatsby'

import './header.css'

const header = ({ scrolled, listenScroll }) => {
  let classes = ['header']

  if (listenScroll && !scrolled) classes.push('transparent')

  classes = classes.join(' ')

  return (
    <nav className={classes}>
      <Link exact activeClassName="current" to="/">
        About
      </Link>

      <Link activeClassName="current" to="/projects">
        Projects
      </Link>

      <Link activeClassName="current" to="/cv">
        CV
      </Link>
    </nav>
  )
}

export default header
