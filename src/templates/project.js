import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'

import Layout from '../components/layout'
import Tags from '../components/tags/tags'
import Author from '../components/author/author'

import './project.css'

//static query cannot be used. why gatsby. why?

export default function project({ data }) {
  const post = data.markdownRemark
  const { frontmatter, html, timeToRead } = post

  return (
    <Layout>
      <div className="blog-content">
        <Link to="/projects">Back</Link>
        <div className="blog-content-header">
          <span>Written on {frontmatter.date}</span>
          <span className="blog-dot-divider" />
          <span>{timeToRead} min read</span>
        </div>
        <div className="blog-article">
          <div className="blog-article-intro">
            <h1 id="article-title">{frontmatter.title}</h1>
            <p>
              <i className="article-abstract">{frontmatter.abstract}</i>
            </p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <Tags list={frontmatter.tags} klass="gray-tag" />
          <div className="article-footer">
            <Author />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query FindPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        path
        title
        date
        abstract
        tags
      }
    }
  }
`
