export default {
  // Line Length
  printWidth: 100,

  // Indentation
  tabWidth: 2,
  useTabs: false,

  // Quotes
  singleQuote: true,
  quoteProps: 'as-needed',

  // Trailing Commas
  trailingComma: 'es5',

  // Semicolons
  semi: true,

  // Brackets
  bracketSpacing: true,
  bracketSameLine: false,

  // Arrow Functions
  arrowParens: 'always',

  // Line Endings
  endOfLine: 'lf',

  // Other
  proseWrap: 'preserve',

  // SCSS/CSS Specific
  overrides: [
    {
      files: ['*.scss', '*.css'],
      options: {
        singleQuote: false, // Use double quotes in SCSS/CSS
        printWidth: 100,
      },
    },
  ],
};
