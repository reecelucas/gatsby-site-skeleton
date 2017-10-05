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

export interface ScrollToParams {
  offset?: number;
  duration?: number;
  easing?: string;
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
  breakpoint?: string;
}

export interface SpacerProps {
  children?: any;
  size?: string;
}

export interface AnchorProps {
  href: string;
  title?: string;
  ariaLabel?: string;
  customClass?: string;
  children: any;
  newTab?: boolean;
}

export interface ResponsiveImageProps {
  className?: string;
  alt?: string;
  srcset?: [
    {
      [key: string]: string;
    }
  ];
  src: string;
  sizes?: [
    {
      [key: string]: string;
    }
  ];
  lazyLoad?: boolean;
}

export interface AspectRatioWrapperProps {
  aspectRatio?: string;
  children?: any;
}

export interface BackToTopProps {
  offset?: number;
  duration?: number;
  easing?: string;
}
