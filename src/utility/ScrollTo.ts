import { ScrollToParams } from '../types';

/*
 * Scrolls the page to specified position.
 *
 * @params:
 * offset: [optional] top of page
 * duration: [optional] duration of scroll animation
 * easingFunction: [optional] easing function used in animation, one of:
 *	- 'easeOutSine'
 *	- 'easeInOutSine'
 *	- 'easeInOutQuint'
 */
const scrollTo = ({
  offset: offset = 0,
  duration: duration = 500,
  easing: easing = 'easeInOutQuint'
}: ScrollToParams = {}): void => {
  const win = window;
  // using 'pageYOffset' over 'scrollY' for support in IE
  const scrollY = win.pageYOffset;
  const time = Math.max(0.1, Math.min(Math.abs(scrollY - offset) / duration, 0.8));
  let start = 0;

  // return if we're already at the point we need to be
  if (scrollY === offset) return;

  /**
   * Easing equations from:
   * https://github.com/danro/easing-js/blob/master/easing.js
   */
  const easingEquations: { [key: string]: Function } = {
    easeOutSine(pos: number) {
      return Math.sin(pos * (Math.PI / 2));
    },
    easeInOutSine(pos: number) {
      return -0.5 * (Math.cos(Math.PI * pos) - 1);
    },
    easeInOutQuint(pos: number) {
      let position = pos;

      if ((position /= 0.5) < 1) {
        return 0.5 * Math.pow(position, 5);
      }
      return 0.5 * (Math.pow(position - 2, 5) + 2);
    }
  };

  const tick = () => {
    start += 1 / 60;
    const p = start / time;
    const t = easingEquations[easing](p);

    if (p < 1) {
      win.requestAnimationFrame(tick);
      win.scrollTo(0, scrollY + (offset - scrollY) * t);
    } else {
      win.scrollTo(0, offset);
    }
  };

  tick();
};

export default scrollTo;
