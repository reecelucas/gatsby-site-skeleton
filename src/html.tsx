import * as React from 'react';

interface Props {
    body: any;
    preBodyComponents: any;
    postBodyComponents: any;
    headComponents: any;
}

let stylesStr: string;
let css: JSX.Element;
const productionEnv: boolean = process.env.NODE_ENV === 'production';

/**
 * Load webfonts based on Zac Leatherman's "The Compromise"
 * approach: https://www.zachleat.com/web/the-compromise/
 */
const loadFonts: string = `
    (function() {
        var d = document;
        var html = d.documentElement;
        var loadedClass = 'fonts-loaded';

        var saveToLocalStorage = function(key, value, expirationDays) {
            var expirationMS = expirationDays * 24 * 60 * 60 * 1000;
            var record = {
                value: JSON.stringify(value),
                timestamp: new Date().getTime() + expirationMS
            };
            localStorage.setItem(key, JSON.stringify(record));
        };

        try {
            var record = JSON.parse(localStorage.getItem(loadedClass));
            if (record && new Date().getTime() < record.timestamp) {
                html.className += ' ' + loadedClass;
            } else if ('fonts' in d) {
                Promise.all([
                    d.fonts.load("300 1em 'Work Sans'"),
                    d.fonts.load("400 1em 'Work Sans'"),
                    d.fonts.load("600 1em 'Work Sans'")
                ])
                    .then(function() {
                        html.className += ' ' + loadedClass;
                        saveToLocalStorage(loadedClass, true, 364);
                    })
                    .catch(console.warn);
            } else {
                var script = d.createElement('script');
                script.src = 'font-loading-fallback.js';
                script.async = true;
                d.head.appendChild(script);
            }
        } catch (e) {}
    })();
`;

if (productionEnv) {
    try {
        stylesStr = require('!raw-loader!../public/styles.css');
    } catch (err) {
        console.log(err);
    }
}

class Html extends React.Component<Props, void> {
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
                        href="fonts/work-sans-300.woff2"
                        as="font"
                        type="font/woff2"
                        crossorigin
                    />
                    <link
                        rel="preload"
                        href="fonts/work-sans-400.woff2"
                        as="font"
                        type="font/woff2"
                        crossorigin
                    />
                    <link
                        rel="preload"
                        href="fonts/work-sans-600.woff2"
                        as="font"
                        type="font/woff2"
                        crossorigin
                    />

                    <script dangerouslySetInnerHTML={{ __html: loadFonts }} />
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

// Use `module.exports` to be compliant with `webpack-require` import method
module.exports = Html;
