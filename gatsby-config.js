const themeOptions = require("gatsby-theme-apollo-docs/theme-options")

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: "gatsby-theme-apollo-docs",
      options: {
        ...themeOptions,
        root: __dirname,
        subtitle: "Apollo Basics",
        description: "How to use the Apollo GraphQL platform",
        githubRepo: "remodzy/docs",
        spectrumPath: "/",
        sidebarCategories: {
          null: ["index", "intro/platform", "intro/benefits"],
          Tutorial: [
            "tutorial/introduction",
            "tutorial/schema",
            "tutorial/data-source",
            "tutorial/resolvers",
            "tutorial/mutation-resolvers",
            "tutorial/production",
            "tutorial/client",
            "tutorial/queries",
            "tutorial/mutations",
            "tutorial/local-state",
          ],
          "Development Tools": [
            "devtools/cli",
            "devtools/editor-plugins",
            "devtools/apollo-config",
          ],
          Resources: [
            "[Principled GraphQL](https://principledgraphql.com)",
            "resources/graphql-glossary",
            "resources/faq",
          ],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
