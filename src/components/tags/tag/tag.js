import React from 'react'

import './tag.css'

const tag = ({ item, klass }) => (
  <span className={`tech-tag ${klass}`}>{item}</span>
)

export default tag
