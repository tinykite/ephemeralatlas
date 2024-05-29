import pluginCSS from "@cobalt-ui/plugin-css";

/** @type {import("@cobalt-ui/core").Config} */
export default {
  tokens: "./tokens.json",
  outDir: "./src/styles/",
  plugins: [pluginCSS()],
};