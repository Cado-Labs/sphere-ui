const path = require("path")

const presets = require("./presets")
module.exports = {
  module: {
    rules: [
      presets.js,
      presets.styles,
      presets.sass,
      presets.yml,
    ],
  },
  resolve: {
    alias: {
      "@i18n": path.resolve("i18n"),
      "@components": path.resolve("components"),
    },
  },
}
