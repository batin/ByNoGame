module.exports = {
  siteMetadata: {
    title: `ByNoGames Case Study`,
    description: `Shows images from given API.`,
    author: `@batin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    }, {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Maven Pro\:200,300,400,500,600,700,900`,
        ],
        display: "swap",
      },
    },
  ],
}
