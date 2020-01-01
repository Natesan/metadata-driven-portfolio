module.exports = {
  siteMetadata: {
    title: "Natesan Sivagnanam",
    titleTemplate: "%s · The Real Hero",
    description: "Portfolio of Natesan Sivagnanam",
    url: "https://www.metadata-portfolio.netlify.com", // No trailing slash allowed!
  },
  plugins: [
    { resolve: `gatsby-plugin-react-helmet` },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: "gatsby-plugin-page-transitions",
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
