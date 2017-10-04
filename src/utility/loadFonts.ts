import * as FontFaceObserver from 'fontfaceobserver';
import serverRendered from './serverRendered';
import { saveToLocalStorage, fetchFromLocalStorage } from './localStorage';

const loadFonts = (fontArray: string[]): void => {
  // if the fonts are already cached we don't need to go any further
  if (serverRendered || fetchFromLocalStorage('fonts-loaded')) return;

  const fontFaceObservers = fontArray.map(font => new FontFaceObserver(font));

  Promise.all(fontFaceObservers.map(observer => observer.load(null, 5000)))
    .then(() => {
      document.documentElement.className += 'fonts-loaded';
      /**
       * Font files are cached for 30 days. To be safe we set the flag
       * expiration time to be just under this, so that we don't skip
       * font-loading for fonts that are no longer cached.
       */
      saveToLocalStorage('fonts-loaded', true, 29);
    })
    .catch(err => console.log(`font loading error: ${err}`));
};

export default loadFonts;
