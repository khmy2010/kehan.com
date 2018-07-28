import React, { Component } from 'react'
import { Link } from 'gatsby'

import Toggle from './toggle'

import './header.css'

class Header extends Component {
  render() {
    let classes = ['header']
    const { scrolled, listenScroll } = this.props

    if ((listenScroll && !scrolled) || this.props.active)
      classes.push('transparent')

    classes = classes.join(' ')
    return (
      <nav className={classes}>
        <div className="header-content">
          <Toggle clicked={this.props.toggleHeader} />
          <div className={this.props.active ? 'nav-mobile' : 'nav-menu'}>
            <Link exact activeClassName="current" to="/">
              About
            </Link>
            <Link activeClassName="current" to="/projects">
              Projects
            </Link>
            <Link activeClassName="current" to="/cv">
              CV
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
