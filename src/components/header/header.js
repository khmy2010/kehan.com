import React, { Component } from 'react'
import { Link } from 'gatsby'

import Toggle from './toggle'
import CustomLink from '../social/link'

import './header.css'

class Header extends Component {
  render() {
    let classes = ['header']
    const { scrolled, listenScroll } = this.props
    const resume =
      'https://drive.google.com/file/d/1yggn3QhEEVQ6HLswcen3dM_3qlE3gDAe/view'

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
            <CustomLink url={resume} title="My Resume">
              Resume
            </CustomLink>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
