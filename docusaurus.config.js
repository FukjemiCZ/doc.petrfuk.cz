// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dokumentace Fukjemi',
  tagline: 'Komplexní osobní příručka od Fukjemi k produktům a službám',
  favicon: 'img/favicon.ico', // Zachován původní favicon

  // Set the production url of your site here
  url: 'https://docs.fukjemi.cz',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'fukjemiCZ', // GitHub uživatel
  projectName: 'docs.petrfuk.cz', // Název projektu na GitHubu

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          routeBasePath: '/', // Nastaví dokumentaci jako hlavní stránku
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/fukjemiCZ/docs.petrfuk.cz/tree/main/', // Odkaz na úpravu stránek
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/fukjemiCZ/docs.petrfuk.cz/tree/main/', // Odkaz na úpravu blogu
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Dokumentace Fukjemi',
        logo: {
          alt: 'Logo Dokumentace Fukjemi',
          src: 'img/logo.svg',
          href: 'https://petrfuk.cz', // Přesměrování loga na externí web
          target: '_self', // Otevře ve stejném okně
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Fukjemi.cz. Vytvořeno s Docusaurusem.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
