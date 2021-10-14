const webpack = require("../webpack/config")

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: webpack.module.rules,
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          ...webpack.resolve.alias,
        }
      }
    }
  }
}
