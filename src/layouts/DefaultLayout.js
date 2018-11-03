import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import RootLayout from './RootLayout'
import Hero from '../components/Hero'
import Nav from '../components/Nav'

const DefaultLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query DefaultLayoutTitleQuery {
        site {
          siteMetadata {
            title
            nav {
              label
              path
            }
          }
        }
      }
    `}
    render={data => {
      const title = data.site.siteMetadata.title
      const nav = data.site.siteMetadata.nav
      return (
        <RootLayout>
          <Hero title={title}>
            {children}
            <Nav items={nav} />
          </Hero>
        </RootLayout>
      )
    }}
  />
)

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
