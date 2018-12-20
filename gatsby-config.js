module.exports = {
  siteMetadata: {
    title: 'Gatsby Static Site Skeleton',
    description: 'A project skeleton for building static PWAs using Gatsby JS'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-static-site-skeleton',
        short_name: 'sss',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'minimal-ui',
        icon: 'src/images/gastby-icon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-emotion'
  ]
};
