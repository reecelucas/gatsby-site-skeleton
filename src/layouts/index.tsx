import * as React from 'react';
import siteConfig from '../../site-config';

// utility
import loadFonts from '../utility/loadFonts';
import controlOutline from '../utility/controlOutline';

// global ui
import Footer from '../components/Footer/Footer';

import '../styles/global.scss';

class TemplateWrapper extends React.Component<any, void> {
  // initialise global modules that require the DOM
  componentDidMount() {
    const fonts = siteConfig.fonts;

    if (fonts) loadFonts(fonts);
    controlOutline();
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
