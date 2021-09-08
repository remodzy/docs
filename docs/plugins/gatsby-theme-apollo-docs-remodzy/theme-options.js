const navConfig = {
  'RoxForms': {
    category: 'Core',
    url: 'https://docs.roxabo.com/roxforms',
    description:
      'Learn about each part of the RoxForms product',
    omitLandingPage: true
  },
  'RoxForms SDK (Angular)': {
    category: 'Rox SDK Clients',
    shortName: 'RoxForms Angular',
    url: 'https://docs.roxabo.com/roxforms/websdk',
    description:
      "Integrate RoxForms into your own Angular web application"
  },
  'RoxForms SDK (Flutter)': {
    category: 'Rox SDK Clients',
    shortName: 'RoxForms Flutter',
    url: 'https://docs.roxabo.com/roxforms/flutter',
    description:
      "Integrate RoxForms into your own Flutter mobile application"
  },
  'RoxForms REST API': {
    category: 'Backend',
    url: 'https://docs.roxabo.com/roxforms/api',
    description:
      'Use powerfull REST APIs to integrate RoxForms into your own solution'
  }
};

const footerNavConfig = {
  Blog: {
    href: 'https://roxabo.com/blog',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
};

module.exports = {
  siteName: 'Roxabo Docs',
  pageTitle: 'Roxabo Docs',
  menuTitle: 'Roxabo Products',
  gaTrackingId: '',
  algoliaApiKey: '768e823959d35bbd51e4b2439be13fb7',
  algoliaIndexName: 'apollodata',
  baseUrl: 'https://roxabo.com',
  twitterHandle: '',
  spectrumHandle: '',
  youtubeUrl: '',
  logoLink: 'https://docs.roxabo.com',
  baseDir: 'docs',
  contentDir: 'source',
  navConfig,
  footerNavConfig,
  ffWidgetId: '3131c43c-bfb5-44e6-9a72-b4094f7ec028'
};
