// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion


const path = require('path');

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Totoro-Docs',
  tagline: 'Documentation Totoro',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'logos/favicon.ico',

  organizationName: 'totoro',
  projectName: 'totoro-docs',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/QuentinHuber/docs-totoro/tree/main/docs/',
        },
        /*versions: {
          current: {
            label: 'v1.x',
            badge: true,
            path: 'latest',
          },
        },*/
        /*lastVersion: 'current',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,*/
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/QuentinHuber/docs-totoro/tree/main/blog/',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            //require.resolve('./src/styles/custom.scss'),
        ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: 'announcementBar',
        content:
          '⭐️ If you like Totoro, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/QuentinHuber/docs-totoro">GitHub</a>! ⭐️',
      },
      navbar: {
        logo: {
          alt: 'My Site Logo',
          src: 'logos/logo.svg',
          srcDark: 'logos/logo2.svg',
        },
        items: [
          //left
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          /*{
            position: 'left',
            to: 'docs/api',
            label: 'API',
          },
          {

            position: 'left',
            to: 'docs/back-office',
            label: 'Back-Office',
          },
          {

            position: 'left',
            to: 'docs/webapp',
            label: 'Web-App',
          },
          {

            position: 'left',
            to: 'docs/mobile',
            label: 'Mobile App',
          },
          {
            position: 'left',
            to: 'docs/figma',
            label: 'Figma',
          },*/
          {to: '/blog', label: 'Blog', position: 'left'},
          
        /*{
          type: 'separator',
          position: 'right',
        },*/

          // right
          {
            href: 'https://github.com/QuentinHuber/docs-totoro',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
            dropdownItemsAfter: [
              {
                href: 'https://github.com/QuentinHuber/docs-totoro',
                label: 'v1.x',
              },
            ],
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/QuentinHuber/docs-totoro',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com',
              },
              {
                label: 'LandingPage',
                href: 'https://google.com',
              },
              {
                label: 'BackOffice',
                href: 'https://google.com',
              },
              {
                label: 'WebApp',
                href: 'https://google.com',
              },
              {
                label: 'Mobile',
                href: 'https://google.com',
              },
              {
                label: 'Figma',
                href: 'https://google.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/QuentinHuber/docs-totoro',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a target="_blank" href="https://github.com/totoro-organization/totoro">Totoro Organization</a>. Built with Docusaurus by <a target="_blank" href="https://github.com/QuentinHuber">Quentin Huber</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
