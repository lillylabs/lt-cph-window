import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/index.scss'

const RootLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query RootLayoutMetaQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
          ]}
        >
          <html lang={data.site.siteMetadata.lang} />
        </Helmet>
        {children}
      </>
    )}
  />
)

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default RootLayout
