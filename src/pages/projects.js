import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import Preview from '../components/preview/preview'

import '../components/root.css'

const projects = () => {
  return (
    <StaticQuery
      query={graphql`
        query ProjectsQuery {
          allMarkdownRemark {
            edges {
              node {
                id
                excerpt
                frontmatter {
                  path
                  title
                  date
                  abstract
                  tags
                  featuredImage {
                    childImageSharp {
                      fluid(maxWidth: 640) {
                        ...GatsbyImageSharpFluid_tracedSVG
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Layout>
          <div className="projects-content">
            {data.allMarkdownRemark.edges.map(project => (
              <Preview key={project.node.id} project={project} />
            ))}
          </div>
        </Layout>
      )}
    />
  )
}

export default projects
