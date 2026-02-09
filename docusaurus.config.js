// @ts-check
// GroupListo Documentation - Docusaurus Configuration

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GroupListo Docs',
  tagline: 'Contact Management for Network Marketing Professionals',
  favicon: 'img/favicon.png',

  // Future flags for Docusaurus v4 compatibility
  future: {
    v4: true,
  },

  // Production URL
  url: 'https://docs.grouplisto.com',
  baseUrl: '/',

  // GitHub pages deployment config
  organizationName: 'grouplisto',
  projectName: 'grouplisto-docs',

  onBrokenLinks: 'throw',

  // Internationalization - English as primary, Slovak to be added later
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/', // Docs at root URL
        },
        blog: false, // Disable blog for now
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'GroupListo',
        logo: {
          alt: 'GroupListo Logo',
          src: 'img/favicon.svg',
          height: 28,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://app.grouplisto.com/admin',
            label: 'Open App',
            position: 'right',
          },
          {
            href: 'https://grouplisto.com',
            label: 'Website',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/getting-started/registration',
              },
              {
                label: 'Contacts',
                to: '/contacts/overview',
              },
              {
                label: 'Team',
                to: '/team/overview',
              },
            ],
          },
          {
            title: 'Product',
            items: [
              {
                label: 'Open App',
                href: 'https://app.grouplisto.com/admin',
              },
              {
                label: 'Website',
                href: 'https://grouplisto.com',
              },
              {
                label: 'Pricing',
                href: 'https://grouplisto.com/pricing',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy Policy',
                href: 'https://grouplisto.com/privacy-policy',
              },
              {
                label: 'Terms of Use',
                href: 'https://grouplisto.com/terms-of-use',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GroupListo. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
