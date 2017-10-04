import serverRendered from './serverRendered';

/**
 * Modified Outline.js:
 * based on http://www.paciellogroup.com/blog/2012/04/how-to-remove-css-outlines-in-an-accessible-manner/
 */
const controlOutline = () => {
  if (serverRendered) return;

  const d = document;
  const styleElem = d.createElement('STYLE');

  // inserts style string in the injected <style></style>
  const setCss = (cssString: string): void => {
    styleElem.innerHTML = cssString;
  };

  d.getElementsByTagName('HEAD')[0].appendChild(styleElem);
  /**
   * Using mousedown instead of mouseover, so that previously focused
   * elements don't lose focus ring on mouse move
   */
  d.addEventListener(
    'mousedown',
    () => {
      setCss(':focus{outline:0}::-moz-focus-inner{border:0;}');
    },
    false
  );
  d.addEventListener('keydown', () => setCss(''), false);
};

export default controlOutline;
