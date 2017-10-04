import * as React from 'react';
import { HtmlProps } from './types';

const productionEnv: boolean = process.env.NODE_ENV === 'production';
let stylesStr: string;
let css: JSX.Element;

if (productionEnv) {
  try {
    stylesStr = require('!raw-loader!../public/styles.css');
  } catch (e) {
    console.log(e);
  }
}

class Html extends React.Component<HtmlProps, void> {
  render() {
    if (productionEnv) {
      css = <style dangerouslySetInnerHTML={{ __html: stylesStr }} />;
    }

    return (
      <html lang="en-GB">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Static Site Skeleton</title>

          <link
            rel="preload"
            href="/fonts/lobster-regular.woff2"
            as="font"
            type="font/woff2"
            crossorigin
          />

          {this.props.headComponents}
          {css}
        </head>
        <body>
          {this.props.preBodyComponents}
          <div
            key={'body'}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

// use `module.exports` to be compliant with `webpack-require` import method
module.exports = Html;
