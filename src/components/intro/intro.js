import React from 'react'

import Github from '../social/github'
import Facebook from '../social/facebook'
import Linkedin from '../social/linkedin'
import './intro.css'

const intro = () => {
  return (
    <div className="intro-hero">
      <div className="intro-mask" />
      <div className="intro-content">
        <h1>Ke Han</h1>
        <p>part time developer, full time human</p>
        <div className="intro-social">
          <Github />
          <Facebook />
          <Linkedin />
        </div>
      </div>
    </div>
  )
}

export default intro
