import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Intro from '../components/intro/intro'
import About from '../components/about/about'

const IndexPage = () => (
  <Layout listenScroll>
    <Intro />
    <About />
  </Layout>
)

export default IndexPage
