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
        name: `source`,
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ]
};
