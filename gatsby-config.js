module.exports = {
  siteMetadata: {
    title: `Asana -- Pet Adoption Agency`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`
      }
    }
  ]
};
