import React from 'react'

import './skills.css'

import Set from './set'

const skills = () => (
  <section className="skills section-content">
    <h1>What I do</h1>
    <h2 className="title-helper">
      As a developer, I created things with the helps of following technology:
    </h2>
    <div className="skills-container">
      <Set
        klass="front-end"
        category="Front End"
        list={['jQuery', 'React (+Redux)', 'Gatsby']}
      />
      <Set
        klass="back-end"
        category="Back End"
        list={['Node', 'MongoDB', 'GraphQL', 'Express']}
      />
      <Set klass="test" category="Test Framework" list={['Jest', 'Enzyme']} />
      <Set
        klass="etc"
        category="etc"
        list={['Firebase', 'Heroku', 'Travis CI', 'Apps Script']}
      />
      <Set
        klass="dusty"
        category="Dusty (need time to pick up)"
        list={['PHP', 'C', 'C++', 'SuperTest']}
      />
    </div>
  </section>
)

export default skills
