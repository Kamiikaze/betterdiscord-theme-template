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
    },
  },

  // Prettier config (disables conflicting rules)
  prettier,
];
