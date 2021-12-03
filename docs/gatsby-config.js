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
            'index'
          ],
          'Form Controls': [
            'controls/introduction',
            'controls/cntrl-section',
            'controls/cntrl-single-choice',
            'controls/cntrl-multiple-choice',
            'controls/cntrl-text-input',
            'controls/cntrl-number',
            'controls/cntrl-photo',
            'controls/cntrl-video',
            'controls/cntrl-text-section',
            'controls/cntrl-datetime',
            'controls/cntrl-attachment',
            'controls/cntrl-table',
            'controls/cntrl-location',
            'controls/cntrl-electronic-signature',
            'controls/cntrl-page-break'
          ],
          'Integration' : [
            'integration/int-restapi',
            'integration/int-webhooks',
            'integration/int-database'
          ]
        },
      },
    },
  ],
};
