module.exports = {
  siteMetadata: {
    title: 'Gatsby Static Site Skeleton',
    description: 'A project skeleton for building static PWAs using Gatsby JS',
    siteUrl: 'http://localhost:8000',
    webfonts: [
      {
        name: 'Open Sans',
        path: '/fonts/open-sans-regular.woff2',
        urls: [
          "url(/fonts/open-sans-regular.woff2) format('woff2')",
          "url(/fonts/open-sans-regular.woff) format('woff')"
        ],
        meta: { weight: '400' }
      },
      {
        name: 'Open Sans',
        path: '/fonts/open-sans-700.woff2',
        urls: [
          "url(/fonts/open-sans-700.woff2) format('woff2')",
          "url(/fonts/open-sans-700.woff) format('woff')"
        ],
        meta: { weight: '700' }
      }
    ],
    webfontLoadedClass: 'fonts-loaded'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-static-site-skeleton',
        short_name: 'static-skeleton',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'minimal-ui',
        icon: 'src/images/gastby-icon.png'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-emotion',
    'gatsby-plugin-sitemap'
  ]
};
