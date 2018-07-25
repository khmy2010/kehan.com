import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'

import Layout from '../components/layout'
import Intro from '../components/projectsIntro/intro'

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
          <Intro />
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
