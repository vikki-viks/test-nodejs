module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "class-methods-use-this": "off",
    "consistent-return": "off",
    "no-await-in-loop": "off",
    "no-restricted-syntax": "off",
  },
};
