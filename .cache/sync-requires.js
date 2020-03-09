const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-source-prismic-graphql-components-preview-page-js": hot(preferDefault(require("/Users/Bec/Coding/Gatsby/angry-ventures/node_modules/gatsby-source-prismic-graphql/components/PreviewPage.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/Bec/Coding/Gatsby/angry-ventures/src/pages/index.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("/Users/Bec/Coding/Gatsby/angry-ventures/src/templates/page.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/Bec/Coding/Gatsby/angry-ventures/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/Bec/Coding/Gatsby/angry-ventures/src/pages/404.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/Bec/Coding/Gatsby/angry-ventures/src/pages/page-2.js")))
}

