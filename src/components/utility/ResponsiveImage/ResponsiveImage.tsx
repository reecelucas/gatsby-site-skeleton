import * as React from 'react';
import { ResponsiveImageProps } from '../../../types';

const buildSrcset = (srcset: [{ [key: string]: string }]): string =>
  srcset.map(src => `${src.url} ${src.width}`).join(',');

const buildSizes = (sizes: [{ [key: string]: string }]): string =>
  sizes.map(size => `${size.mediaCondition} ${size.size}`).join(',');

const ResponsiveImage = (props: ResponsiveImageProps) => {
  const { className, alt, srcset, src, sizes, lazyLoad } = props;
  const placeholderSrc =
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

  return (
    <img
      className={className || null}
      alt={alt || null}
      data-src={lazyLoad ? src : null}
      src={lazyLoad ? placeholderSrc : src}
      data-srcset={srcset && lazyLoad ? buildSrcset(srcset) : null}
      srcSet={srcset && !lazyLoad ? buildSrcset(srcset) : null}
      sizes={srcset && sizes ? buildSizes(sizes) : null}
    />
  );
};

export default ResponsiveImage;
