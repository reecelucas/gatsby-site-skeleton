/* eslint-disable */

import React from 'react';
import siteMetadata from '../metadata-config';

const productionEnv = process.env.NODE_ENV === 'production';
let stylesStr;
let css;

if (productionEnv) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.log(e);
  }
}

const Html = props => {
  if (productionEnv) {
    css = <style dangerouslySetInnerHTML={{ __html: stylesStr }} />;
  }

  const {
    title,
    description,
    href,
    imageUrl,
    imageAlt,
    themeColour
  } = siteMetadata;

  return (
    <html lang="en-GB">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={href} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicons/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicons/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color={themeColour}
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content={title} />
        <meta name="application-name" content={title} />
        <meta
          name="msapplication-config"
          content="/favicons/browserconfig.xml"
        />
        <meta name="theme-color" content={themeColour} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={href} />
        <meta name="twitter:card" content="summary" />
        <meta name="og:site_name" content={title} />
        <meta property="og:image" content={imageUrl} />
        <meta name="twitter:image:alt" content={imageUrl} />

        {props.headComponents}
        {css}
      </head>
      <body>
        {props.preBodyComponents}
        <div
          key={'body'}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
};

export default Html;
