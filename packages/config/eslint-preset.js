module.exports = {
  extends: ["react-important-stuff", "prettier"],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
  parser: "@babel/eslint-parser",
};
