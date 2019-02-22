import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  src: PropTypes.string.isRequired,
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
  className: PropTypes.string,
  lazyLoad: PropTypes.bool
};

const buildSrcset = srcset =>
  srcset.map(src => `${src.url} ${src.width}`).join(',');

const buildSizes = sizes =>
  sizes.map(size => `${size.mediaCondition} ${size.size}`).join(',');

const Image = ({ className, alt, srcset, src, sizes, lazyLoad, ...rest }) => {
  const placeholderSrc =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

  return (
    <img
      className={className}
      alt={alt || ''}
      data-src={lazyLoad ? src : null}
      src={lazyLoad ? placeholderSrc : src}
      data-srcset={srcset && lazyLoad ? buildSrcset(srcset) : null}
      srcSet={srcset && !lazyLoad ? buildSrcset(srcset) : null}
      sizes={srcset && sizes ? buildSizes(sizes) : null}
      {...rest}
    />
  );
};

Image.propTypes = propTypes;

export default Image;
