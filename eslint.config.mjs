import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import importlint from 'eslint-plugin-import';
import promiselint from 'eslint-plugin-promise';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist', 'public'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importlint,
      promise: promiselint,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prefer-const': 'warn',
      'no-unused-vars': 'warn',
      'import/no-default-export': 'error',
      'import/first': 'error',
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Node.js built-in modules (e.g., fs, path)
            'external', // External modules from node_modules (e.g., react)
            'internal', // Internal modules which can include @components/ and @utils/
            ['sibling', 'parent'], // Sibling and parent imports
          ],
          'newlines-between': 'always',
        },
      ],
      'import/newline-after-import': ['error', { count: 1 }],
    },
  },
);
