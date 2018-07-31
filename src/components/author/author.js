import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import './author.css'

const author = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "author.jpg" }) {
            childImageSharp {
              fixed(width: 120) {
                ...GatsbyImageSharpFixed_noBase64
              }
            }
          }
        }
      `}
      render={data => (
        <div className="article-author">
          <Img
            fixed={data.file.childImageSharp.fixed}
            style={{ borderRadius: '100%', width: '60px', height: '60px' }}
          />
          <div className="author-info">
            <div className="author-name">
              <h3>Ke Han</h3>
              <span className="author-label">Author</span>
            </div>
            <div className="author-line">
              You base your decision on who you want to be.
            </div>
          </div>
        </div>
      )}
    />
  )
}

//.file.childImageSharp.fixed

export default author
