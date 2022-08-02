const { defineConfig } = require("eslint-define-config");
module.exports = defineConfig({
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["plugin:vue/recommended", "plugin:prettier/recommended"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        parse: "vue-eslint-parser",
    },
    plugins: ["vue"],
    rules: {},
});
