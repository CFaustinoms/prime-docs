// @ts-check
const { themes } = require('prism-react-renderer')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Prime Gestão de Produção',
  tagline: 'Manual do Sistema — Prime Marcenaria Técnica',
  favicon: 'img/favicon.ico',

  url: 'https://docs.primemarcenaria.com.br',
  baseUrl: '/prime-docs/',

  organizationName: 'CFaustinoms',
  projectName: 'prime-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: ({
    navbar: {
      title: 'Prime Gestão',
      logo: {
        alt: 'Prime Marcenaria',
        src: 'img/logo.png',
        srcDark: 'img/logo_claro.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'manualSidebar',
          position: 'left',
          label: 'Manual',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Prime Marcenaria Técnica · Itatiba/SP · ${new Date().getFullYear()}`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
    },
  }),
}

module.exports = config
