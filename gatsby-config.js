// gatsby-config.js
module.exports = {
  siteMetadata: {
    // Used for the site title and SEO
    title: `Oscar Software Developer | Houston, Tx`,
    // Used to provide alt text for your avatar
    author: `Oscar Mejia`,
    // Used for SEO
    description: `See my projects, and my thoughts`,
    // Used for social links in the root footer
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/manorojac`
      },
      {
        name: `GitHub`,
        url: `https://github.com/odm275`
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/assets`
      }
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'WPGraphQL',
        fieldName: 'wpgraphql',
        url: 'http://portfolio.local/graphql',
        refetchInterval: 60
      }
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
}