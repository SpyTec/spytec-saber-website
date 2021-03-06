// Saber config file
// https://saber.land/docs/saber-config.html

module.exports = {
  // Use the package `saber-theme-portfolio`
  // More: https://saber.land/docs/themes.html
  theme: 'portfolio',

  siteConfig: {
    title: 'Eric Gustavsson',
    lang: 'en',
    url: 'https://spytec.se',
    author: 'Eric Gustavson',
    email: 'eric@spytec.se'
  },
  // Configure the theme
  themeConfig: {
    style: 'dark',
    github: 'SpyTec',
    twitter: 'SpyTec',
    sponsorLink: 'https://www.paypal.me/SpyTec',
    sponsorTip: 'Buy me a coffee',
    projects: 'pinned-repos',
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'About',
        link: '/about'
      },
      {
        text: 'Posts',
        link: '/posts'
      }
    ]
  },

  permalinks: {
    page: '/:slug',
    post: '/posts/:slug'
  },

  plugins: [
    {
      resolve: 'saber-plugin-query-posts'
    },
    {
      resolve: 'saber-plugin-feed',
      options: {
        atomFeed: true
      }
    }
  ]
};
