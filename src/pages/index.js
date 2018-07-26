import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Intro from '../components/intro/intro'
import About from '../components/about/about'
import Books from '../components/books/books'

const IndexPage = () => (
  <Layout listenScroll>
    <Intro />
    <About />
    <Books />
  </Layout>
)

export default IndexPage
