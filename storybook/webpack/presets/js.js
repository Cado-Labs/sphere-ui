module.exports = {
  test: /\.js$/,
  use: [
    {
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/env",
          [
            "@babel/react",
            {
              runtime: "automatic",
            },
          ],
        ],
        babelrc: false,
      },
    },
  ],
}
