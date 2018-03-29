import serverRendered from './serverRendered';

let bodyBlocked: boolean = false;

const d = document;
const html = d.documentElement;
const body = d.body;

export const blockScroll = (): void => {
  if (serverRendered || !body || !body.style || bodyBlocked) return;

  /**
   * `document.body.clientWidth` returns the inner width of the
   * body, including any padding but not vertical scrollbars (if there are any)
   */
  const scrollBarWidth: number = window.innerWidth - body.clientWidth;

  /**
   * 1. Fixes bug on iOS and desktop Safari whereby setting
   *    `overflow: hidden` on the html/body does not prevent scrolling
   * 2. Fixes bug in desktop Safari where `overflowY` does not prevent
   *    scroll if an `overflow-x` style is also applied to the body
   */
  html.style.position = 'relative'; /* [1] */
  html.style.overflow = 'hidden'; /* [2] */
  body.style.position = 'relative'; /* [1] */
  body.style.overflow = 'hidden'; /* [2] */
  body.style.paddingRight = `${scrollBarWidth}px`;

  bodyBlocked = true;
};

export const allowScroll = (): void => {
  if (serverRendered || !body || !body.style || !bodyBlocked) return;

  html.style.position = '';
  html.style.overflow = '';
  body.style.position = '';
  body.style.overflow = '';
  body.style.paddingRight = '';

  bodyBlocked = false;
};
