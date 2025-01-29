import scss from "rollup-plugin-scss"
import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import json from "@rollup/plugin-json"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import copy from "rollup-plugin-copy"

const components = ["EmojiPicker"]
const themes = [
  "blue",
  "green",
  "indigo",
  "pink",
  "amber",
  "cyan",
]

const mode = ["dark", "light"]

const createConfig = (input, output) => ({
  input,
  output: {
    file: output,
    format: "es",
    inlineDynamicImports: true,
  },
  external: ["primereact", "primeicons"],
  plugins: [
    nodeResolve({
      extensions: [".js"],
    }),
    json(),
    babel({ babelHelpers: "runtime", plugins: ["@babel/plugin-transform-runtime"] }),
    commonjs(),
    scss(),
    copy({
      targets: themes.flatMap(theme =>
        mode.map(type => ({
          src: `node_modules/primereact/resources/themes/lara-${type}-${theme}/*`,
          dest: `dist/themes/${type}/${theme}`
        }))
      )
    })
  ],
})

const config = [
  ...components.map(name => createConfig(`src/components/${name}/index.js`, `dist/${name}.js`)),
  createConfig("src/index.js", "dist/index.js"),
]

export default config
