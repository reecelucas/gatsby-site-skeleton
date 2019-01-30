const localStorage = require('./helpers/local-storage');

module.exports = (webfonts, loadedClass) => {
  // Only load webfonts in browsers that support the Font Loading API
  if (!('fonts' in document)) return;

  if (localStorage.fetch(loadedClass)) {
    /**
     * We use a flag in localStorage to infer whether the webfonts are cached.
     * This is obviously not bulletproof because if the font is never cached,
     * or the user clears their cache (but not their local storage), this check
     * will still pass and the `fonts-loaded` class will be applied before the webfont
     * is downloaded. Unfortunatelty, until the Cache API has better support there isn't
     * a lot that can be done about this.
     */
    document.documentElement.classList.add(loadedClass);
  } else {
    const fonts = webfonts.map(webfont => {
      // Omit the `path` property from the `webfont` object
      const { path, ...webfontCleaned } = webfont; // eslint-disable-line
      const values = Object.keys(webfontCleaned).map(
        key => webfontCleaned[key]
      );

      return new FontFace(...values);
    });

    Promise.all(fonts.map(font => font.load()))
      .then(loadedFonts => {
        loadedFonts.forEach(font => {
          document.fonts.add(font);
        });

        document.documentElement.classList.add(loadedClass);
        localStorage.save({
          key: loadedClass,
          value: true,
          expirationDays: 7
        });
      })
      .catch(console.warn);
  }
};
