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
      resolve: `gatsby-theme-blog`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`
      }
    }
  ]
}
