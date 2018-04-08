import { ReactElement } from 'react';

export interface HtmlProps {
    body: any;
    preBodyComponents: any;
    postBodyComponents: any;
    headComponents: any;
}

export interface layoutProps {
    data?: {
        site: {
            siteMetadata: {
                siteName: string;
                title: string;
                description: string;
                href: string;
                imageUrl: string;
                imageAlt: string;
                themeColour: string;
                fonts: string[];
            };
        };
    };
    children?: any;
}

export interface LazyLoadParams {
    selector?: string;
    loadClass?: string;
    errorClass?: string;
    loadCallback?: Function;
    errorCallback?: Function;
    parentId?: string;
    rootMargin?: string;
    threshold?: number;
}

export interface LazyLoadAPI {
    init: () => void;
    destroy: () => void;
    update: () => void;
}

export interface ScrollItParams {
    destination: number;
    duration: number;
    easing:
    | 'linear'
    | 'easeInQuad'
    | 'easeOutQuad'
    | 'easeInOutQuad'
    | 'easeInCubic'
    | 'easeOutCubic'
    | 'easeInOutCubic'
    | 'easeInQuart'
    | 'easeOutQuart'
    | 'easeInOutQuart'
    | 'easeInQuint'
    | 'easeOutQuint'
    | 'easeInOutQuint';
    callback?: () => any;
}

export interface SaveToLocalStorageParams {
    key: string;
    value: any;
    expirationDays: number;
}

export interface ClassMap {
    [key: string]: string;
}

export interface SvgIconProps {
    height?: string;
    width?: string;
}

export interface GridProps {
    children?: any;
    columnCount?: number;
    breakpoint?: 'small' | 'medium' | 'large';
}

export interface SpacerProps {
    children?: any;
    size?: 'tiny' | 'small' | 'large' | 'huge';
}

export interface AnchorProps {
    href: string;
    title?: string;
    ariaLabel?: string;
    customClass?: string;
    children: any;
    newTab?: boolean;
}

export interface srcsetObject {
    width: string;
    url: string;
}

export interface sizesObject {
    size: string;
    mediaCondition: string;
}

export interface ResponsiveImageProps {
    className?: string;
    alt?: string;
    srcset?: srcsetObject[];
    src: string;
    sizes?: sizesObject[];
    lazyLoad?: boolean;
}

export interface AspectRatioWrapperProps {
    aspectRatio?: '8:5' | '4:3' | '3:2' | '1:1';
    children?: any;
}

export interface BackToTopProps {
    offset?: number;
    duration?: number;
    easing?: string;
}

export interface ConditionallyRenderParams {
    Component: any;
    condition: () => boolean;
}
