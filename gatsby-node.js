/* eslint-disable */

const glob = require('glob');
const path = require('path');
const PurifyCSSPlugin = require('purifycss-webpack');

/**
 * Gatsby's 'API' for customising webpack configs,
 * using https://github.com/lewie9021/webpack-configurator
 */
exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case 'build-css':
      config.plugin('purify-css', PurifyCSSPlugin, () => [
        {
          paths: glob.sync(path.join(__dirname, 'src/**/*.{tsx, jsx}')),
          minimize: true,
          purifyOptions: {
            info: true,
            // whitelist all component classes generated by CSS Modules
            whitelist: ['*component*']
          }
        }
      ]);
      break;
  }

  return config;
};
