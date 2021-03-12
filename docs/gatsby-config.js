const themeOptions = require('./plugins/gatsby-theme-apollo-docs-remodzy/theme-options');

module.exports = {
  pathPrefix: '/docs/react',
  plugins: [
    "babel-preset-gatsby",
    {
      resolve: 'gatsby-theme-apollo-docs-remodzy',
      options: {
        ...themeOptions,
        root: __dirname,
        subtitle: 'Client (React)',
        description: 'A guide to using the Apollo GraphQL Client with React',
        githubRepo: 'remodzy/docs',
        checkLinksOptions: {
          exceptions: [
            '/api/core/ApolloClient/',
            '/v2/api/apollo-client/',
          ],
        },
        sidebarCategories: {
          null: [
            'index',
            'why-apollo',
            'get-started',
            '[Changelog](https://github.com/apollographql/apollo-client/blob/main/CHANGELOG.md)',
          ],
          'API - Core': [
            'api/core/ApolloClient',
            'api/core/ObservableQuery'
          ],
          'API - Cache': [
            'api/cache/InMemoryCache'
          ],
          'API - Link': [
            'api/link/apollo-link-batch-http',
            'api/link/apollo-link-context',
            'api/link/apollo-link-error',
            'api/link/apollo-link-rest',
            'api/link/apollo-link-retry',
            'api/link/apollo-link-ws',
            'api/link/persisted-queries'
          ],
        },
      },
    },
  ],
};
