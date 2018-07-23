import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import Layout from '../components/layout'

//static query cannot be used. why gatsby. why?

export default function project({ data }) {
  const post = data.markdownRemark
  const { frontmatter, html } = post

  return (
    <Layout>
      <Link to="/projects">Back</Link>
      <h3>Posted on {frontmatter.date}</h3>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query FindPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
      }
    }
  }
`
