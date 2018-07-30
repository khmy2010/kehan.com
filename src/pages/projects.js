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
                frontmatter {
                  path
                  title
                  date
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
            <div className="section-intro">Blah Blah Blah</div>
            {data.allMarkdownRemark.edges.map(project => (
              // <div key={project.node.id}>
              //   <h2>{project.node.frontmatter.title}</h2>
              //

              //   />
              // </div>
              <Preview key={project.node.id} project={project} />
            ))}
          </div>
        </Layout>
      )}
    />
  )
}

export default projects
