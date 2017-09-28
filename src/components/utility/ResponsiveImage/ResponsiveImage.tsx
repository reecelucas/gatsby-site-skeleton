import * as React from 'react';
import { ResponsiveImageProps } from '../../../types';

const buildSrcset = (srcset: [{ [key: string]: string }]): string =>
  srcset.map(src => `${src.url} ${src.width}`).join(',');

const buildSizes = (sizes: [{ [key: string]: string }]): string =>
  sizes.map(size => `${size.mediaCondition} ${size.size}`).join(',');

const ResponsiveImage = (props: ResponsiveImageProps) => {
  const { className, alt, srcset, src, sizes } = props;

  return (
    <img
      className={className || null}
      alt={alt || null}
      src={src}
      srcSet={srcset ? buildSrcset(srcset) : null}
      sizes={srcset && sizes ? buildSizes(sizes) : null}
    />
  );
};

export default ResponsiveImage;
