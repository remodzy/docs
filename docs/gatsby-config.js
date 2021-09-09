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
        siteName: 'Roxabo Docs',
        pageTitle: 'Roxabo | Docs',
        subtitle: 'Roxabo Products',
        description: 'A guide to using Roxabo products - RoxForms',
        githubRepo: 'remodzy/docs',
        logoLink: '//docs.roxabo.com/',
        spectrumHandle: '',
        checkLinksOptions: {
          exceptions: [
            '/api/core/ApolloClient/',
            '/v2/api/apollo-client/',
          ],
        },
        sidebarCategories: {
          null: [
            'index',
            'why-roxforms',
            'example'
          ],
          'RoxForms - Controls': [
            'controls/introduction',
            'controls/cntrl-section',
            'controls/cntrl-single-choice',
            'controls/cntrl-datetime'
          ]
        },
      },
    },
  ],
};
