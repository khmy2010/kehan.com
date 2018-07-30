import React from 'react'

import Link from 'gatsby-link'
import Img from 'gatsby-image'

import './preview.css'

import Tag from './tag/tag'

const preview = ({ project }) => {
  const { frontmatter } = project.node
  console.log(frontmatter)
  return (
    <article className="article">
      <div className="article-body">
        <div className="article-featured-image">
          <Img
            fluid={project.node.frontmatter.featuredImage.childImageSharp.fluid}
          />
        </div>
        <div className="article-content">
          <h3>{frontmatter.title}</h3>
          <p className="article-abstract">
            Delivery tracking application intended to be a one-stop destination
            for all your packages. Input your tracking number and the backend
            calls the approriate API (USPS, UPS, etc). It displays the current
            status of your deliveries while periodically polling for updates in
            the background until they've reached their destination.
          </p>
          <div className="article-tags">
            <Tag item="React" />
            <Tag item="Angular" />
            <Tag item="Heroku" />
            <Tag item="MongoDB" />
            <Tag item="Jest" />
            <Tag item="Puppeteer" />
          </div>
          <Link className="link-button" to={frontmatter.path}>
            Read more ...
          </Link>
        </div>
      </div>
    </article>
  )
}

export default preview
