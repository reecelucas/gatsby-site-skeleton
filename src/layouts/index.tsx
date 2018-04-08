import * as React from 'react';
import Helmet from 'react-helmet';
import { layoutProps } from '../types';

// Utility
import loadFonts from '../utilities/loadFonts';
import controlOutline from '../utilities/controlOutline';

// Global UI
import Footer from '../components/Footer/Footer';
import '../styles/global.scss';

class TemplateWrapper extends React.Component<layoutProps, void> {
    // Initialise global modules that require the DOM (after render)
    componentDidMount() {
        // Load any webfonts (if they aren't already cached)
        loadFonts(this.props.data.site.siteMetadata.fonts);
        controlOutline();
    }

    render() {
        const {
            title,
            description,
            href,
            imageUrl,
            imageAlt,
            themeColour
        } = this.props.data.site.siteMetadata;

        return (
            <div>
                <Helmet>
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
                    <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
                    <meta name="theme-color" content={themeColour} />

                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                    <meta property="og:url" content={href} />
                    <meta name="twitter:card" content="summary" />
                    <meta name="og:site_name" content={title} />
                    <meta property="og:image" content={imageUrl} />
                    <meta name="twitter:image:alt" content={imageAlt} />
                </Helmet>

                {this.props.children()}

                <Footer />
            </div>
        );
    }
}

/**
 * Query gatsby-config.js to retrieve the siteMetadata,
 * passing it to TemplateWrapper in a prop called 'data'.
 */
export const templateQuery = graphql`
    query templateQuery {
        site {
            siteMetadata {
                title
                description
                href
                imageUrl
                imageAlt
                themeColour
                fonts
            }
        }
    }
`;

export default TemplateWrapper;
