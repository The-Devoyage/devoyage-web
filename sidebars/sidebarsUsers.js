/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
const sidebars = {
  usersSidebar: [
    { type: "autogenerated", dirName: "." },
    {
      type: "html",
      value:
        '<a target="_blank" href="https://thedevoyage.gumroad.com/l/graphql-users"><button class="button button--primary button--block margin-vert--sm">Purchase MIT License</button></a>',
    },
    {
      type: "html",
      value:
        '<a target="_blank" href="https://thedevoyage.gumroad.com/l/graphql-users"><button class="button button--success button--block">Support The Project</button>',
    },
  ],
};

module.exports = sidebars;
