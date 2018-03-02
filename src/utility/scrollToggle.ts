import serverRendered from './serverRendered';

let bodyBlocked: boolean = false;

export const blockScroll = (): void => {
  if (serverRendered || !document.body || !document.body.style || bodyBlocked) return;

  /**
   * document.body.clientWidth returns the inner width of the
   * body, including any padding but not vertical scrollbars (if there are any)
   */
  const scrollBarWidth: number = window.innerWidth - document.body.clientWidth;

  document.body.style.paddingRight = `${scrollBarWidth}px`;
  document.body.style.overflowY = 'hidden';

  bodyBlocked = true;
};

export const allowScroll = (): void => {
  if (serverRendered || !document.body || !document.body.style || !bodyBlocked) return;

  document.body.style.paddingRight = '';
  document.body.style.overflowY = '';

  bodyBlocked = false;
};
