import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import './layout.css'
import './root.css'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Backdrop from '../components/backdrop/backdrop'

class Layout extends Component {
  state = {
    scrolled: false,
    mobileHeaderActive: false,
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

  toggleHeader = () => {
    console.log('header')
    this.setState((prevState, _) => {
      return { mobileHeaderActive: !prevState.mobileHeaderActive }
    })
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
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
              />
            </Helmet>
            <div className="wrapper">
              <Backdrop
                show={this.state.mobileHeaderActive}
                clicked={this.toggleHeader}
              />
              <Header
                scrolled={this.props.listenScroll ? this.state.scrolled : false}
                listenScroll={this.props.listenScroll}
                toggleHeader={this.toggleHeader}
                active={this.state.mobileHeaderActive}
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
