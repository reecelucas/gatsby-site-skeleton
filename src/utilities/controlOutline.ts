import serverRendered from './serverRendered';

/**
 * Modified Outline.js:
 * based on http://www.paciellogroup.com/blog/2012/04/how-to-remove-css-outlines-in-an-accessible-manner/
 */
const controlOutline = () => {
  if (serverRendered) return;

  const d = document;
  const head = d.getElementsByTagName('HEAD')[0];
  const styleElem = d.createElement('STYLE');

  // Inserts style string in the injected `<style>` tag
  const setCss = (cssString: string): void => {
    styleElem.innerHTML = cssString;
  };

  const removeFocusState = (): void => {
    setCss(':focus{outline:0;}::-moz-focus-inner{border:0;}');
  };

  const restoreFocusState = (): void => {
    setCss('');
  };

  head.appendChild(styleElem);

  /**
   * Use `mousedown` instead of `mouseover`, so that previously focused
   * elements don't lose focus ring on mouse move.
   */
  d.addEventListener('mousedown', removeFocusState, false);
  d.addEventListener('keydown', restoreFocusState, false);
};

export default controlOutline;
