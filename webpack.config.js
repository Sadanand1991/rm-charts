const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require("path");

module.exports = {
  ...defaultConfig,
  entry: path.resolve(__dirname, "inc/assets/src/index.js"),
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
};
