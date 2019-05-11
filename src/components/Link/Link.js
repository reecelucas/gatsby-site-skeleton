import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import { captureInteraction } from '../../error-handling/error-handling';
import getAttributeProps from '../../helpers/getAttributeProps';

const propTypes = {
  children: PropTypes.any.isRequired,
  href: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  newTab: PropTypes.bool
};

const Link = React.forwardRef(function Link(props, ref) {
  const { children, href, newTab, id, onClick, ...rest } = props;

  // Any internal link will start with one slash
  const internal = /^\/(?!\/)/.test(href);

  const renderExternalLink = () => (
    <a
      href={href}
      target={newTab ? '_blank' : null}
      rel={newTab ? 'noopener noreferrer' : null}
      onClick={onClick}
      ref={ref}
      {...getAttributeProps(rest)}
    >
      {children}
    </a>
  );

  const renderInternalLink = () => (
    <GatsbyLink
      to={href}
      onClick={event => {
        captureInteraction(event);
        onClick(event);
      }}
      ref={ref}
      data-interaction-id={id}
      {...getAttributeProps(rest)}
    >
      {children}
    </GatsbyLink>
  );

  return internal ? renderInternalLink() : renderExternalLink();
});

Link.propTypes = propTypes;

export default Link;
