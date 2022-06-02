// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "The Devoyage",
  tagline: "Code Genesis Products & Development Services",
  url: "https://www.thedevoyage.com",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.svg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "The-Devoyage", // Usually your GitHub org/user name.
  projectName: "devoyage-web", // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          id: "fullstack",
          path: "fullstack",
          routeBasePath: "fullstack",
          sidebarPath: require.resolve("./sidebars/sidebarsFullstack.js"),
          editUrl: "https://github.com/the-devoyage",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/the-devoyage",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "gateway",
        path: "gateway",
        routeBasePath: "gateway",
        sidebarPath: require.resolve("./sidebars/sidebarsGateway.js"),
        editUrl: "https://www.github.com/The-Devoyage/devoyage",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "accounts",
        path: "accounts",
        routeBasePath: "accounts",
        sidebarPath: require.resolve("./sidebars/sidebarsAccounts.js"),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
      },
      navbar: {
        style: "dark",
        title: "The Devoyage",
        logo: {
          alt: "The Devoyage Ship Logo",
          src: "img/logo.svg",
          width: "50px",
        },
        items: [
          {
            to: "/products",
            position: "right",
            label: "Products",
          },
          {
            to: "/services",
            position: "right",
            label: "Services",
          },
          {
            position: "right",
            label: "Docs",
            items: [
              {
                label: "fullstack",
                to: "/fullstack/fullstack-intro",
              },
              {
                label: "gateway",
                to: "/gateway/gateway-intro",
              },
              {
                label: "accounts",
                to: "/accounts/accounts-intro",
              },
            ],
          },
          { to: "/blog", label: "Blog", position: "right" },
          {
            href: "https://github.com/The-Devoyage",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        logo: {
          width: "50px",
          src: "img/logo.svg",
        },
        links: [
          {
            title: "The Devoyage",
            items: [
              {
                label: "Docs",
                to: "/",
              },
              {
                label: "Products",
                to: "/",
              },
              {
                label: "Services",
                to: "/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Slack",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Medium",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Gumroad",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/The-Devoyage",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Devoyage, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
