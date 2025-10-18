import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
  // Base recommended config
  js.configs.recommended,

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
      env: {
        node: true,
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
    },
  },

  // Prettier config (disables conflicting rules)
  prettier,
];
