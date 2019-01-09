import * as React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import getAttributeProps from '../../helpers/getAttributeProps';
import { css } from '@emotion/core';
import { captureInteraction } from '../../error-handling/error-handling';

const propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
  newTab: PropTypes.bool
};

const styles = css`
  display: inline-block;
  text-decoration: underline;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
`;

const Anchor = ({ children, href, title, className, newTab, ...rest }) => {
  const sharedProps = {
    css: [styles, className],
    title: title || null,
    ...getAttributeProps(rest)
  };

  const renderExternalLink = () => (
    <a href={href} target="_blank" rel="noopener noreferrer" {...sharedProps}>
      {children}
    </a>
  );

  const renderInternalLink = () => (
    // For interal links we record user interaction (for error tracking)
    <Link to={href} onClick={captureInteraction} {...sharedProps}>
      {children}
    </Link>
  );

  return newTab ? renderExternalLink() : renderInternalLink();
};

Anchor.propTypes = propTypes;

export default Anchor;
