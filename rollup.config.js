import scss from "rollup-plugin-scss"
import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import { nodeResolve } from "@rollup/plugin-node-resolve"

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "es",
    inlineDynamicImports: true,
  },
  external: ["primereact", "primeicons"],
  plugins: [
    nodeResolve({
      extensions: [".js"],
    }),
    babel({ babelHelpers: "runtime", plugins: ["@babel/plugin-transform-runtime"] }),
    commonjs(),
    scss(),
  ],
}
