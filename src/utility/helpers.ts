let bodyBlocked: boolean = false;

// check to see if Gatsby.js is rendering on the server
export const serverRendered =
  typeof window === 'undefined' || typeof document === 'undefined';

const prefixedTransEndEvent = (): string => {
  if (serverRendered) return;

  const transitions: { [key: string]: string } = {
    transition: 'transitionend',
    OTransition: 'otransitionend',
    MozTransition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd'
  };
  const elem: HTMLElement = document.createElement('fakeelement');
  const elemStyle: { [key: string]: any } = elem.style;
  let transName: string;

  Object.keys(transitions).forEach((key: string) => {
    if (elemStyle[key] !== undefined) {
      transName = transitions[key];
    }
  });

  return transName;
};

const prefixedAnimEndEvent = (): string => {
  if (serverRendered) return;

  const animations: { [key: string]: string } = {
    animation: 'animationend',
    OAnimation: 'oAnimationend',
    MozAnimation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd'
  };
  const elem: HTMLElement = document.createElement('fakeelement');
  const elemStyle: { [key: string]: any } = elem.style;
  let animName: string;

  Object.keys(animations).forEach((key: string) => {
    if (elemStyle[key] !== undefined) {
      animName = animations[key];
    }
  });

  return animName;
};

export const setCookie = (
  cookieName: string,
  cookieValue: string,
  days: number
): void => {
  if (serverRendered) return;

  const today: Date = new Date();
  const expire: Date = new Date();

  expire.setTime(today.getTime() + 3600000 * 24 * days);
  document.cookie = `${cookieName}=${encodeURIComponent(
    cookieValue
  )};expires='${expire.toUTCString()}`;
};

export const blockScroll = (): void => {
  if (serverRendered || !document.body || !document.body.style || bodyBlocked)
    return;

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
  if (serverRendered || !document.body || !document.body.style || !bodyBlocked)
    return;

  document.body.style.paddingRight = '';
  document.body.style.overflowY = '';

  bodyBlocked = false;
};

export const stopEventBubble = (e: Event): void => e.stopPropagation();

export const transEndEventName = prefixedTransEndEvent();

export const animEndEventName = prefixedAnimEndEvent();
