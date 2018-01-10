import babel from "rollup-plugin-babel";
import uglify from "rollup-plugin-uglify";

export default {
  input: "main.js",
  output: {
    file: "index.js",
    format: "cjs",
    name: "spanify"
  },
  plugins: [
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    uglify()
  ]
}