import React from 'react'
import { Link } from 'gatsby'

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import './notFound.css'

const notFound = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "missing.png" }) {
            childImageSharp {
              fluid(maxWidth: 640) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => (
        <div className="not-found-content">
          <div className="not-found-image">
            <Img fluid={data.file.childImageSharp.fluid} />
          </div>
          <h1>404</h1>
          <p>
            Oohh ohh, this page is missing. Go to my{' '}
            <Link to="/">homepage</Link> to find it back.
          </p>
        </div>
      )}
    />
  )
}

export default notFound
