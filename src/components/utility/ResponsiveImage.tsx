import * as React from 'react';

interface SrcsetObject {
    width: string;
    url: string;
}

interface SizesObject {
    size: string;
    mediaCondition: string;
}

interface Props {
    className?: string;
    alt?: string;
    srcset?: SrcsetObject[];
    src: string;
    sizes?: SizesObject[];
    lazyLoad?: boolean;
}

const buildSrcset = (srcset: SrcsetObject[]): string =>
    srcset.map((src: SrcsetObject) => `${src.url} ${src.width}`).join(',');

const buildSizes = (sizes: SizesObject[]): string =>
    sizes.map((size: SizesObject) => `${size.mediaCondition} ${size.size}`).join(',');

const ResponsiveImage = (props: Props) => {
    const { className, alt, srcset, src, sizes, lazyLoad } = props;
    const placeholderSrc =
        'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

    return (
        <img
            className={className || undefined}
            alt={alt || undefined}
            data-src={lazyLoad ? src : undefined}
            src={lazyLoad ? placeholderSrc : src}
            data-srcset={srcset && lazyLoad ? buildSrcset(srcset) : undefined}
            srcSet={srcset && !lazyLoad ? buildSrcset(srcset) : undefined}
            sizes={srcset && sizes ? buildSizes(sizes) : undefined}
        />
    );
};

export default ResponsiveImage;
