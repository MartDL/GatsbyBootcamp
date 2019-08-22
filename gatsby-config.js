module.exports = {
  siteMetadata: {
    title: `Full-Stack Bootcamp`,
    author: 'Martin Lord'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `c3qgmy1o150m`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `ZiICeevksOvPCGMQYkUXH9ZP2uP4wjM45dzpM5ggptA`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
          plugins: [
            `gatsby-remark-relative-images`,
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 750,
                linkImagesToOriginal: false
              }
            }
          ]
      }
    }
  ]
}