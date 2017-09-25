import * as React from 'react';
import siteConfig from '../../site-config';
import loadFonts from '../utility/loadFonts';
import Footer from '../components/Footer/Footer';

/**
 * Import global styles:
 * Typescript treats imports differently, and importing CSS modules
 * like we do in JS results in a 'Cannot find module' error.
 */
require('../styles/global.scss');

class TemplateWrapper extends React.Component<any, void> {
  constructor(props: any) {
    super(props);
  }

  // initialise global modules that require the DOM
  componentDidMount() {
    const fonts = siteConfig.fonts;

    if (fonts) {
      loadFonts(fonts);
    }
  }

  render() {
    return (
      <div>
        {this.props.children()}
        <Footer />
      </div>
    );
  }
}

export default TemplateWrapper;
