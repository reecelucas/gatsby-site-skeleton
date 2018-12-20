import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string,
  srcset: PropTypes.arrayOf(
    PropTypes.exact({
      width: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ),
  sizes: PropTypes.arrayOf(
    PropTypes.exact({
      size: PropTypes.string.isRequired,
      mediaCondition: PropTypes.string.isRequired
    })
  ),
  lazyLoad: PropTypes.bool
};

const StyledImage = styled.img`
  height: auto;
  font-style: italic;
  max-width: 100%;
  vertical-align: middle;
  width: 100%;
`;

const buildSrcset = srcset =>
  srcset.map(src => `${src.url} ${src.width}`).join(',');

const buildSizes = sizes =>
  sizes.map(size => `${size.mediaCondition} ${size.size}`).join(',');

const ResponsiveImage = ({ className, alt, srcset, src, sizes, lazyLoad }) => {
  const placeholderSrc =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

  return (
    <StyledImage
      className={className}
      alt={alt}
      data-src={lazyLoad ? src : null}
      src={lazyLoad ? placeholderSrc : src}
      data-srcset={srcset && lazyLoad ? buildSrcset(srcset) : null}
      srcSet={srcset && !lazyLoad ? buildSrcset(srcset) : null}
      sizes={srcset && sizes ? buildSizes(sizes) : null}
    />
  );
};

ResponsiveImage.propTypes = propTypes;

export default ResponsiveImage;
