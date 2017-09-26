export interface HtmlProps {
  body: any;
  preBodyComponents: any;
  postBodyComponents: any;
  headComponents: any;
}

export interface LazyLoadParams {
  selector?: string;
  loadClass?: string;
  errorClass?: string;
  loadCallback?: Function | null;
  errorCallback?: Function | null;
  parentId?: string | null;
  rootMargin?: string;
  threshold?: number;
}

export interface LazyLoadAPI {
  init: () => void;
  destroy: () => void;
  update: () => void;
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

export interface GridClassMap {
  [key: string]: string;
}

export interface SpacerProps {
  children?: any;
  size?: string;
}

export interface SpacerClassMap {
  [key: string]: string;
}

export interface AnchorProps {
  href: string;
  title?: string;
  ariaLabel?: string;
  customClass?: string;
  children: any;
  newTab?: boolean;
}
