import scss from "rollup-plugin-scss"

export default {
  input: `src/index.js`,
  output: {
    file: `dist/index.js`,
    format: "es",
  },
  external: ["primereact", "primeicons"],
  plugins: [scss()],
}
