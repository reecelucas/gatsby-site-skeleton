import * as FontFaceObserver from 'fontfaceobserver';
import { setCookie } from './helpers';

const loadFonts = (fontArray: string[]): void => {
  const html = window.document.documentElement;

  // if the fonts are already cached we don't need to go any further
  if (document.cookie.indexOf('fonts-loaded') !== -1) {
    html.className += ' fonts-loaded';
    return;
  }

  const fontFaceObservers = fontArray.map(font => new FontFaceObserver(font));

  Promise.all(fontFaceObservers.map(observer => observer.load(null, 5000)))
    .then(() => {
      html.className += ' fonts-loaded';
      /**
       * Font files are cached for 30 days. To be safe we set the cookie
       * expiration time to be just under this, so that we don't skip
       * font-loading for fonts that are no longer cached.
       */
      setCookie('fonts-loaded', 'true', 29);
    })
    .catch(err => console.log(`font loading error: ${err}`));
};

export default loadFonts;
