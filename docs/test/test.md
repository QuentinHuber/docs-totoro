---
title: Test
sidebar_position: 7
---

### Test

:::info

🥇 Docusaurus provides first-class support for Algolia DocSearch.

👥 Other options are maintained by the community: please report bugs to their respective repositories.

:::info From the old docsearch?

You can read more about migration from the legacy DocSearch infra in our blog post or the DocSearch migration docs.

:::

:::

:::caution

🥇 Docusaurus provides first-class support for Algolia DocSearch.

👥 Other options are maintained by the community: please report bugs to their respective repositories.

:::

:::note

By default, the Docusaurus preset generates a sitemap.xml that the Algolia crawler can use.

:::

:::tip

It is highly recommended to use a config similar to the Docusaurus 2 website config.

:::


<details>
<summary>Installation steps when not using <code>@docusaurus/preset-classic</code></summary>

1. Install the package:

```bash npm2yarn
npm install --save @docusaurus/theme-search-algolia
```

2. Register the theme in `docusaurus.config.js`:

```js title="docusaurus.config.js"
module.exports = {
  title: 'My site',
  // ...
  themes: ['@docusaurus/theme-search-algolia'],
  themeConfig: {
    // ...
  },
};
```

</details>
