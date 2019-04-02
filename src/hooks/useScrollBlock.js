import { useRef } from 'react';
import isBrowser from '../helpers/isBrowser';

/**
 * Usage:
 * const [blockScroll, allowScroll] = useScrollBlock();
 */
export default () => {
  const scrollBlocked = useRef();
  const html = isBrowser() ? document.documentElement : {};
  const { body } = isBrowser() ? document : {};

  const blockScroll = () => {
    if (!body || !body.style || scrollBlocked.current) return;

    /**
     * `body.clientWidth` returns the inner width of the body, including
     * any padding but not vertical scrollbars (if there are any).
     */
    const scrollBarWidth = window.innerWidth - body.clientWidth;

    /**
     * 1. Fixes a bug in iOS and desktop Safari whereby setting
     *    `overflow: hidden` on the html/body does not prevent scrolling.
     * 2. Fixes a bug in desktop Safari where `overflowY` does not prevent
     *    scroll if an `overflow-x` style is also applied to the body.
     */
    html.style.position = 'relative'; /* [1] */
    html.style.overflow = 'hidden'; /* [2] */
    body.style.position = 'relative'; /* [1] */
    body.style.overflow = 'hidden'; /* [2] */
    body.style.paddingRight = `${scrollBarWidth}px`;

    scrollBlocked.current = true;
  };

  const allowScroll = () => {
    if (!body || !body.style || !scrollBlocked.current) return;

    html.style.position = '';
    html.style.overflow = '';
    body.style.position = '';
    body.style.overflow = '';
    body.style.paddingRight = '';

    scrollBlocked.current = false;
  };

  return [blockScroll, allowScroll];
};
