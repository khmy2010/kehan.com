const path = require('path')

//explore this later:
//https://github.com/gatsbyjs/gatsby-starter-blog/blob/v2/gatsby-node.js
//https://www.gatsbyjs.org/tutorial/part-seven/
//https://using-remark.gatsbyjs.org/
//draw this as hero: https://pillow.codes/

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const projectTemplate = path.resolve('src/templates/project.js')

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
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
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors)

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({ path: node.frontmatter.path, component: projectTemplate })
    })
  })
}
