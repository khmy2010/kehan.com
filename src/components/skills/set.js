import React from 'react'

import './set.css'

const set = ({ klass, category, list }) => (
  <div className="skills-set">
    <div className="skills-category">{category}</div>
    <div className="skills-list">
      {list.map(skill => (
        <span className={klass} key={`(${category})-${skill}`}>
          {skill}
        </span>
      ))}
    </div>
  </div>
)
export default set
