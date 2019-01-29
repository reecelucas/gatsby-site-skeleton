const localStorage = require('./helpers/local-storage');

module.exports = (webfonts, loadedClass) => {
  const addLoadedClass = () => {
    document.documentElement.className += ` ${loadedClass}`;
  };

  if (localStorage.fetch(loadedClass)) {
    /**
     * Note: if the font is never cached, or the user clears their cache (but
     * not their local storage), this check will still pass and the `fonts-loaded`
     * styling will be added before the webfont is available. This feels very "edge-casey"
     * so is probably not worth guarding against.
     */
    addLoadedClass();
  } else if ('fonts' in document) {
    const fonts = webfonts.map(webfont => {
      // Omit the `path` property from the `webfont` object
      const { path, ...rest } = webfont; // eslint-disable-line
      return new FontFace(...Object.values(rest));
    });

    Promise.all(fonts.map(font => font.load()))
      .then(loadedFonts => {
        loadedFonts.forEach(font => {
          document.fonts.add(font);
        });

        addLoadedClass();
        localStorage.save({
          key: loadedClass,
          value: true,
          expirationDays: 364 // Font files are cached for a year (see `static/_headers`)
        });
      })
      .catch(console.warn);
  } else {
    /**
     * TODO: figure out how to provide a font loading fallback
     * for browsers that don't support the native FontFace API.
     */
  }
};
