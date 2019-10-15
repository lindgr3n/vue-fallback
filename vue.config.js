const path = require("path");
const ThemeResolverPlugin = require("webpack-theme-resolver-plugin");

module.exports = {
  configureWebpack: {
    resolve: {
      // Cold use below or the pluginway using prefix
      // modules: [
      //   path.resolve(__dirname, "customer"),
      //   path.resolve(__dirname, "src"),
      //   "node_modules"
      // ]
      plugins: [
        new ThemeResolverPlugin([
          {
            prefix: "c4",
            directories: [
              path.resolve(__dirname, "customer"),
              path.resolve(__dirname, "src")
            ]
            // module: "awesome-components",
            // singlePackage: true
          }
        ])
      ]
    }
  }
};
