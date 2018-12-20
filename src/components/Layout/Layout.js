import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';

import '../../styles/global';

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const Layout = ({ children }) => (
  // The result of the graphql `query` is passed into the `render` prop as `data`
  <StaticQuery
    query={graphql`
      query siteMetadata {
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
          htmlAttributes={{ lang: 'en-GB' }}
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description }
          ]}
        />
        {children}
      </>
    )}
  />
);

Layout.propTypes = propTypes;

export default Layout;
