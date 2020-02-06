module.exports = {
  siteMetadata: {
    title: `Dane Maison | Developer`,
    description: `I'm Dane Maison, a full-stack developer from Orange County, California.`,
    author: `Dane Maison`,
    siteUrl: "http://danemaison.com",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-140798132-1",
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: ["200", "300", "400", "700", "800", "900"],
          },
        ],
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dane Maison Portfolio`,
        short_name: `Dane Maison`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#127EB1`,
        display: `minimal-ui`,
        icon: `src/images/dm_favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
