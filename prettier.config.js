const pluginSortImports = require('@trivago/prettier-plugin-sort-imports');
const pluginTailwindcss = require('prettier-plugin-tailwindcss');

/** @type {import("prettier").Parser}  */
const parser = {
  ...pluginSortImports.parsers.typescript,
  parse: pluginTailwindcss.parsers.typescript.parse
};

/** @type {import("prettier").Plugin}  */
const plugin = {
  parsers: {
    typescript: parser
  }
};

module.exports = {
  plugins: [plugin],
  printWidth: 80,
  jsxSingleQuote: true,
  semi: true,
  arrowParens: 'always',
  singleQuote: true,
  bracketSpacing: true,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'none',
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrder: ['@public', '@util', '@hooks', '@components']
};
