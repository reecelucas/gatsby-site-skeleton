module.exports = {
  siteMetadata: {
    title: 'Static Site Skeleton',
    description: 'Lorem Ipsum Dolor Sit Amet',
    href: 'http://static-site-skeleton.com/',
    imageUrl: '/',
    imageAlt: 'Lorem ispum dolor amet',
    themeColour: '#fff',
    fonts: ['font-name-here', 'font-name-here']
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Static Site Skeleton',
        short_name: 'SSS',
        start_url: '/',
        icons: [
          {
            src: '/favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        background_color: '#fff',
        theme_color: '#fff',
        display: 'standalone'
      },
    },
    'gatsby-plugin-offline'
  ]
};
