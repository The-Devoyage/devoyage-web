// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import { themes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "The Devoyage",
  tagline: "Voyage, Code, Conquer",
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
          editUrl:
            "https://www.github.com/The-Devoyage/devoyage-web/blob/master",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://www.github.com/The-Devoyage/devoyage-web/blob/master",
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
        id: "subgraph",
        path: "subgraph",
        routeBasePath: "subgraph",
        sidebarPath: require.resolve("./sidebars/sidebarsSubgraph.js"),
        editUrl: "https://www.github.com/The-Devoyage/devoyage-web/blob/master",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "orions-arrow",
        path: "orions-arrow",
        routeBasePath: "orions-arrow",
        sidebarPath: require.resolve("./sidebars/sidebarsOrionsArrow.js"),
        editUrl: "https://www.github.com/The-Devoyage/devoyage-web/blob/master",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "gateway",
        path: "gateway",
        routeBasePath: "gateway",
        sidebarPath: require.resolve("./sidebars/sidebarsGateway.js"),
        editUrl: "https://www.github.com/The-Devoyage/devoyage-web/blob/master",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "accounts",
        path: "accounts",
        routeBasePath: "accounts",
        sidebarPath: require.resolve("./sidebars/sidebarsAccounts.js"),
        editUrl: "https://www.github.com/The-Devoyage/devoyage-web/blob/master",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "users",
        path: "users",
        routeBasePath: "users",
        sidebarPath: require.resolve("./sidebars/sidebarsUsers.js"),
        editUrl: "https://www.github.com/The-Devoyage/devoyage-web/blob/master",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "mailer",
        path: "mailer",
        routeBasePath: "mailer",
        sidebarPath: require.resolve("./sidebars/sidebarsMailer.js"),
        editUrl: "https://www.github.com/The-Devoyage/devoyage-web/blob/master",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "media",
        path: "media",
        routeBasePath: "media",
        sidebarPath: require.resolve("./sidebars/sidebarsMedia.js"),
        editUrl: "https://www.github.com/The-Devoyage/devoyage-web/blob/master",
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/subgraph/intro",
            from: ["/subgraph"],
          },
        ],
      },
    ]
  ],

  themeConfig:
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
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
            label: "Solutions",
          },
          { to: 'blog', label: 'Blog', position: 'right' },
          {
            position: "right",
            label: "Docs",
            items: [
              {
                label: "Subgraph",
                to: "/subgraph/intro",
              },
              {
                label: "Gateway",
                to: "/gateway/intro",
              },
              {
                label: "Accounts",
                to: "/accounts/intro",
              },
              {
                label: "Users",
                to: "/users/intro",
              },
              {
                label: "Media",
                to: "/media/intro",
              },
              {
                label: "Mailer",
                to: "/mailer/intro",
              },
              {
                label: "Orion's Arrow",
                to: "/orions-arrow/intro",
              }
            ],
          },
          // { to: "/blog", label: "Blog", position: "right" },
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
                to: "/products",
              },
              {
                label: "Services",
                to: "/services",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Slack",
                href: "https://thedevoyage.slack.com",
              },
              {
                label: "Medium",
                href: "https://medium.com/@thedevoyage",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/thedevoyage",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/the-devoyage",
              }
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
              {
                label: "Newsletter",
                href: "https://thedevoyage.gumroad.com/subscribe"
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Devoyage, LLC.`,
      },
      prism: {
        theme: themes.nightOwl,
        additionalLanguages: ["toml", "rust"]
      },
    }),
};

module.exports = config;
