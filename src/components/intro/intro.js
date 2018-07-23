import React from 'react'

import Github from '../social/github'
import Facebook from '../social/facebook'
import Linkedin from '../social/linkedin'
import './intro.css'

const intro = () => {
  return (
    <div className="intro-hero">
      <div className="intro-mask" />
      <div className="intro-text">
        <h1>Ke Han</h1>
        <p>Making code as life</p>
      </div>
      <div className="intro-social">
        <Github />
        <Facebook />
        <Linkedin />
      </div>
    </div>
  )
}

export default intro
