import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import './layout.css'
import './root.css'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'

class Layout extends Component {
  state = {
    scrolled: false,
  }

  componentDidMount() {
    if (this.props.listenScroll)
      window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    if (this.props.listenScroll)
      window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    this.setState({ scrolled: window.scrollY > 30 ? true : false })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet>
              <title>Ke Han</title>
              <link
                rel="icon"
                type="image/png"
                href="./favicon.ico"
                sizes="16x16"
              />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
              />
            </Helmet>
            <div className="wrapper">
              <Header
                scrolled={this.props.listenScroll ? this.state.scrolled : false}
                listenScroll={this.props.listenScroll}
              />
              {this.props.children}
              <div className="push" />
            </div>
            <Footer />
          </>
        )}
      />
    )
  }
}

// const Layout = ({ children, listenScroll }) => (
//   <StaticQuery
//     query={graphql`
//       query SiteTitleQuery {
//         site {
//           siteMetadata {
//             title
//           }
//         }
//       }
//     `}
//     render={data => (
//       <>
//         <Helmet
//           title={data.site.siteMetadata.title}
//           meta={[
//             { name: 'description', content: 'Sample' },
//             { name: 'keywords', content: 'sample, something' },
//           ]}
//         />
//         <div>
//           <Header />
//           {children}
//         </div>
//       </>
//     )}
//   />
// )

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
