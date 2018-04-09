import * as React from 'react';

interface srcsetObject {
    width: string;
    url: string;
}

interface sizesObject {
    size: string;
    mediaCondition: string;
}

interface Props {
    className?: string;
    alt?: string;
    srcset?: srcsetObject[];
    src: string;
    sizes?: sizesObject[];
    lazyLoad?: boolean;
}

const buildSrcset = (srcset: srcsetObject[]): string =>
    srcset.map((src: srcsetObject) => `${src.url} ${src.width}`).join(',');

const buildSizes = (sizes: sizesObject[]): string =>
    sizes.map((size: sizesObject) => `${size.mediaCondition} ${size.size}`).join(',');

const ResponsiveImage = (props: Props) => {
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
