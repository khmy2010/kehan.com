import React from 'react'
import './intro.css'

// import Code from './code'
import CodePNG from './code.png'

const intro = () => (
  <div className="projects-hero">
    <img src={CodePNG} alt="code" />
    <div className="projects-hero-text">
      <h1>Projects</h1>
      <h2>A retrospective study on my previous projects</h2>
    </div>
  </div>
)

export default intro
