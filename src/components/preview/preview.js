import React from 'react'

import Link from 'gatsby-link'
import Img from 'gatsby-image'

import './preview.css'

// import Tags from './tags'
// import tag from './tag/tag'

import Tags from '../tags/tags'

const preview = ({ project }) => {
  const { frontmatter } = project.node
  const abstract = frontmatter.abstract || project.node.excerpt || ''
  const tags = frontmatter.tags || []

  return (
    <article className="article">
      <div className="article-body">
        <div className="article-featured-image">
          <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
        </div>
        <div className="article-content">
          <h3 className="link-header">
            <Link to={frontmatter.path}>{frontmatter.title}</Link>
          </h3>
          <p className="article-abstract">{abstract}</p>
          <Tags list={tags} />
          <Link className="link-button" to={frontmatter.path}>
            Read more ...
          </Link>
        </div>
      </div>
    </article>
  )
}

export default preview
