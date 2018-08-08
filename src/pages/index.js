import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Intro from '../components/intro/intro'
// import About from '../components/about/about'
import Books from '../components/books/books'
import Skills from '../components/skills/skills'
import Contact from '../components/contact/contact'

const IndexPage = () => (
  <Layout listenScroll>
    <Intro />
    {/* <About /> */}
    <Skills />
    <Books />
    <Contact />
  </Layout>
)

export default IndexPage
