module.exports = {
  siteMetadata: {
    title: `Ge agency`,
    description: `Belgium based GE agency.`,
    author: `Georgiy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Remote schema query type. This is an arbitrary name.
        typeName: "WPGraphQL",
        // Field name under which it will be available. Used in your Gatsby query. This is also an arbitrary name.
        fieldName: "wpcontent",
        // GraphQL endpoint, relative to your WordPress home URL.
        url: "http://artist-agency.codobi.be/graphql",
      },
    },
    {

      resolve: `gatsby-plugin-google-fonts`,
      
      options: {
      
      fonts: [`Roboto`, `Oswald`],
      
      display: "swap",
      
      },
      
      }, 
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
