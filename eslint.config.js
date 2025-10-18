import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import globals from 'globals';

export default [
  // Base recommended config
  js.configs.recommended,

  {
    plugins: {
      import: importPlugin,
      prettier: prettierPlugin,
    },
  },

  // Global ignores
  {
    ignores: ['node_modules/**', 'dist/**', '*.css', '*.log'],
  },

  // Main configuration
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // Code Quality
      'no-console': 'off', // Allow console for build scripts
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-undef': 'error',
      'prefer-const': 'warn',
      'no-var': 'error',

      // Best Practices
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'no-throw-literal': 'error',

      // Style (handled by Prettier mostly)
      semi: ['error', 'always'],
      quotes: ['error', 'single', { avoidEscape: true }],
      'comma-dangle': ['error', 'only-multiline'],

      // Import Order
      'import/order': [
        'warn',
        {
          groups: [
            'builtin', // Node.js built-ins (e.g., fs, path)
            'external', // External libraries (e.g., lodash, react)
            'internal', // Internal modules (e.g., utils, config)
            ['parent', 'sibling'], // Parent and sibling imports
            'index', // Index files
          ],
          pathGroups: [
            {
              pattern: '@/**', // Custom alias imports (if applicable)
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc', // Alphabetical order
            caseInsensitive: true,
          },
          'newlines-between': 'always', // Enforce newlines between groups
        },
      ],

      // Prettier Integration
      'prettier/prettier': 'warn', // Add Prettier rules
    },
  },

  // Prettier integration to avoid conflicts
  prettier,
];
