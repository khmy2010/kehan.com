import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'

import Layout from '../components/layout'

const projects = () => {
  return (
    <StaticQuery
      query={graphql`
        query ProjectsQuery {
          allMarkdownRemark {
            edges {
              node {
                id
                frontmatter {
                  path
                  title
                  date
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Layout>
          <h1>alo world</h1>
          {data.allMarkdownRemark.edges.map(project => (
            <div key={project.node.id}>
              <h2>{project.node.frontmatter.title}</h2>
              <Link to={project.node.frontmatter.path}>Read more</Link>
            </div>
          ))}
        </Layout>
      )}
    />
  )
}

export default projects
