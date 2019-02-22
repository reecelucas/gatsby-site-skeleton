const loadFonts = require('./scripts/load-fonts');
const config = require('./gatsby-config');

// `onClientEntry` is called when the Gatsby browser runtime first starts
exports.onClientEntry = () => {
  const html = document.documentElement;
  html.className = html.className.replace(/\bno-js\b/g, 'js');

  const { webfonts, webfontLoadedClass } = config.siteMetadata;

  if (webfonts && webfontLoadedClass) {
    loadFonts(webfonts, webfontLoadedClass);
  }
};
