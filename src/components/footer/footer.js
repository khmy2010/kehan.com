import React from 'react'

import Facebook from '../social/facebook'
import Github from '../social/github'
import Linkedin from '../social/linkedin'
import Emoji from './emoji'

import './footer.css' //to ignore the annoying emoji warnings

/* eslint-disable */ const footer = () => {
  return (
    <footer>
      <div className="footer">
        <p>
          Made with <Emoji>❤️</Emoji> by Ke Han <Emoji>😉</Emoji> ©{' '}
          {new Date().getFullYear()}
        </p>
        <div className="footer-social">
          <Facebook />
          <Github />
          <Linkedin />
        </div>
      </div>
    </footer>
  )
}

export default footer
