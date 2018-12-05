module.exports = {
  siteMetadata: {
    title: `Hunter is testing this out!`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS",
        short_name: "GatsbyJS",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "minimal-ui",
        icon: "src/images/icon.png" // This path is relative to the root of the site.
      }
    },
    `gatsby-transformer-remark`,

    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`
    },
    "gatsby-plugin-offline",
    `gatsby-plugin-react-helmet`
  ]
};
