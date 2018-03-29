import * as FontFaceObserver from 'fontfaceobserver';
import serverRendered from './serverRendered';
import { saveToLocalStorage, fetchFromLocalStorage } from './localStorage';

const loadFonts = (fontArray: string[] | undefined): void => {
  if (
    serverRendered ||
    !fontArray ||
    fetchFromLocalStorage('fonts-loaded')
  ) {
    return;
  }

  const fontFaceObservers = fontArray.map(font => new FontFaceObserver(font));

  Promise.all(fontFaceObservers.map(observer => observer.load(null, 5000)))
    .then(() => {
      document.documentElement.className += ' fonts-loaded';
      /**
       * Font files are cached for 1 year. To be safe we set the local storage
       * expiration time to be just under this, so that we don't skip
       * font loading for fonts that are no longer cached.
       */
      saveToLocalStorage({
        key: 'fonts-loaded',
        value: true,
        expirationDays: 364
      });
    })
    .catch(err => console.log(`font loading error: ${err}`));
};

export default loadFonts;
