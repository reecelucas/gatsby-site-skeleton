import * as React from 'react';
import PropTypes from 'prop-types';
import getAttributeProps from '../../helpers/getAttributeProps';
import styled from '@emotion/styled';

const propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
  newTab: PropTypes.bool
};

const StyledAnchor = styled.a`
  display: inline-block;
  text-decoration: underline;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
`;

const Anchor = ({ children, href, title, className, newTab, ...rest }) => {
  const attributes = getAttributeProps(rest);

  return (
    <StyledAnchor
      className={className}
      href={href}
      title={title || null}
      target={newTab ? '_blank' : null}
      rel={newTab ? 'noopener noreferrer' : null}
      {...attributes}
    >
      {children}
    </StyledAnchor>
  );
};

Anchor.propTypes = propTypes;

export default Anchor;
