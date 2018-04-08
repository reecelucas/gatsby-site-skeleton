import * as React from 'react';
import { HtmlProps } from './types';

let stylesStr: string;
let css: JSX.Element;
const productionEnv: boolean = process.env.NODE_ENV === 'production';
const inlineScript: string = `
    (function(){
        var html = document.documentElement;
        html.className += ' js';

        try {
            var record = JSON.parse(localStorage.getItem('fonts-loaded'));
            if (record && new Date().getTime() < record.timestamp) {
            html.className += ' fonts-loaded';
            }
        } catch (err) {
            console.log(err);
        }
    })(window);
`;

if (productionEnv) {
    try {
        stylesStr = require('!raw-loader!../public/styles.css');
    } catch (err) {
        console.log(err);
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

                    <script dangerouslySetInnerHTML={{ __html: inlineScript }} />
                    {this.props.headComponents}
                    {css}
                </head>
                <body>
                    {this.props.preBodyComponents}
                    <div key={'body'} id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
                    {this.props.postBodyComponents}
                </body>
            </html>
        );
    }
}

// Use `module.exports` to be compliant with `webpack-require` import method
module.exports = Html;
