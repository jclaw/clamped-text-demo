// eslint.config.js (ESM + flat config)

import { defineConfig } from 'eslint/config';
import vuePlugin from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import globals from 'globals';

export default defineConfig([
  // ----------------------------------------------------
  // 1) Base config (ignore build output & node_modules)
  // ----------------------------------------------------
  {
    files: ['**/*.js', '**/*.ts', '**/*.vue'],
    ignores: ['dist', 'node_modules'],
  },

  // ----------------------------------------------------
  // 2) Vue Single File Components: parse <template> + <script lang="ts">
  // ----------------------------------------------------
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        // Use TypeScript parser inside <script> blocks
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      // Key is how we’ll refer to it in config; value is the imported plugin
      vue: vuePlugin,
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      // "vue3-recommended" works in eslint-plugin-vue >= 8.x
      // If you get errors, try "vue3-essential" or "recommended"
      ...vuePlugin.configs['vue3-recommended']?.rules,
      ...tsPlugin.configs.recommended?.rules,
    },
  },

  // ----------------------------------------------------
  // 3) TypeScript (.ts files)
  // ----------------------------------------------------
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended?.rules,
    },
  },

  // ----------------------------------------------------
  // 4) JavaScript (.js files)
  // ----------------------------------------------------
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    rules: {
      // add or override JS rules here
    },
  },
]);

// // eslint.config.js (CommonJS + flat config)

// const { defineConfig } = require('eslint/config');
// const vuePlugin = require('eslint-plugin-vue');
// const vueParser = require('vue-eslint-parser');
// const tsParser = require('@typescript-eslint/parser');
// const tsPlugin = require('@typescript-eslint/eslint-plugin');
// const globals = require('globals');

// module.exports = defineConfig([
//   // ----------------------------------------------------
//   // 1) Base config (ignore build output & node_modules)
//   // ----------------------------------------------------
//   {
//     files: ['**/*.js', '**/*.ts', '**/*.vue'],
//     ignores: ['dist', 'node_modules'],
//   },

//   // ----------------------------------------------------
//   // 2) Vue Single File Components: parse <template> + <script lang="ts">
//   // ----------------------------------------------------
//   {
//     files: ['**/*.vue'],
//     languageOptions: {
//       parser: vueParser,
//       parserOptions: {
//         // Use TypeScript parser inside <script> blocks
//         parser: tsParser,
//         ecmaVersion: 'latest',
//         sourceType: 'module',
//       },
//     },
//     plugins: {
//       vue: vuePlugin,
//       '@typescript-eslint': tsPlugin,
//     },
//     rules: {
//       // Spread in recommended Vue 3 + TS rules
//       ...vuePlugin.configs['vue3-recommended']?.rules,
//       ...tsPlugin.configs.recommended?.rules,
//     },
//   },

//   // ----------------------------------------------------
//   // 3) TypeScript (.ts files)
//   // ----------------------------------------------------
//   {
//     files: ['**/*.ts'],
//     languageOptions: {
//       parser: tsParser,
//       parserOptions: {
//         ecmaVersion: 'latest',
//         sourceType: 'module',
//       },
//     },
//     plugins: {
//       '@typescript-eslint': tsPlugin,
//     },
//     rules: {
//       ...tsPlugin.configs.recommended?.rules,
//     },
//   },

//   // ----------------------------------------------------
//   // 4) JavaScript (.js files)
//   // ----------------------------------------------------
//   {
//     files: ['**/*.js'],
//     languageOptions: {
//       ecmaVersion: 'latest',
//       sourceType: 'module',
//       globals: {
//         ...globals.browser,
//         ...globals.es2021,
//       },
//     },
//     rules: {
//       // Add or override JS-specific rules here
//       // e.g. "semi": ["error", "always"]
//     },
//   },
// ]);

// // eslint.config.js
// import vue from 'eslint-plugin-vue';
// import vueParser from 'vue-eslint-parser';
// import tsParser from '@typescript-eslint/parser';
// import tsPlugin from '@typescript-eslint/eslint-plugin';
// import globals from 'globals';

// export default [
//   // Example basic config
//   {
//     files: ['**/*.vue', '**/*.ts', '**/*.js'],
//     ignores: ['node_modules', 'dist'],
//   },
//   // Vue SFC config
//   {
//     files: ['**/*.vue'],
//     languageOptions: {
//       parser: vueParser,
//       parserOptions: {
//         parser: tsParser, // for <script> blocks
//         ecmaVersion: 'latest',
//         sourceType: 'module',
//       },
//     },
//     plugins: {
//       // The actual plugin object is default import from 'eslint-plugin-vue'
//       vue,
//       '@typescript-eslint': tsPlugin,
//     },
//     rules: {
//       // Combine recommended rules from both Vue and TS
//       ...vue.configs['vue3-recommended'].rules,
//       ...tsPlugin.configs.recommended.rules,
//     },
//   },
//   // Pure TS config
//   {
//     files: ['**/*.ts'],
//     languageOptions: {
//       parser: tsParser,
//       parserOptions: {
//         ecmaVersion: 'latest',
//         sourceType: 'module',
//       },
//     },
//     plugins: {
//       '@typescript-eslint': tsPlugin,
//     },
//     rules: {
//       ...tsPlugin.configs.recommended.rules,
//     },
//   },
//   // Optional config for JS-only files
//   {
//     files: ['**/*.js'],
//     languageOptions: {
//       ecmaVersion: 'latest',
//       sourceType: 'module',
//       globals: {
//         ...globals.browser,
//         ...globals.es2021,
//       },
//     },
//     rules: {
//       // Add or override JS-specific rules
//     },
//   },
// ];

// // eslint.config.js

// import vue from 'eslint-plugin-vue';
// import vueParser from 'vue-eslint-parser';
// import typescriptParser from '@typescript-eslint/parser';
// import typescriptPlugin from '@typescript-eslint/eslint-plugin';
// import globals from 'globals';

// export default [
//   // 1) Base config: ignore dist/ and node_modules
//   {
//     files: ['**/*.js', '**/*.ts', '**/*.vue'],
//     ignores: ['dist', 'node_modules'],
//   },
//   // 2) Vue + TypeScript for *.vue files
//   {
//     files: ['**/*.vue'],
//     languageOptions: {
//       // Use vue-eslint-parser so that <template> is recognized
//       parser: vueParser,
//       parserOptions: {
//         // Then hand <script> blocks off to TS parser inside .vue
//         parser: typescriptParser,
//         ecmaVersion: 'latest',
//         sourceType: 'module',
//       },
//     },
//     plugins: {
//       vue,
//       '@typescript-eslint': typescriptPlugin,
//     },
//     rules: {
//       // Pull in the recommended rule sets
//       ...vue.configs['vue3-recommended'].rules,
//       ...typescriptPlugin.configs.recommended.rules,
//     },
//   },
//   // 3) TypeScript for *.ts files
//   {
//     files: ['**/*.ts'],
//     languageOptions: {
//       parser: typescriptParser,
//       parserOptions: {
//         ecmaVersion: 'latest',
//         sourceType: 'module',
//       },
//     },
//     plugins: {
//       '@typescript-eslint': typescriptPlugin,
//     },
//     rules: {
//       ...typescriptPlugin.configs.recommended.rules,
//     },
//   },
//   // 4) Plain JS for *.js files (optional)
//   {
//     files: ['**/*.js'],
//     languageOptions: {
//       ecmaVersion: 'latest',
//       sourceType: 'module',
//     },
//     rules: {
//       // Add any plain JS rules you like here
//     },
//   },
//   // 5) Define some global variables, like window, console, etc.
//   {
//     languageOptions: {
//       globals: {
//         ...globals.browser,
//         ...globals.es2021,
//       },
//     },
//   },
// ];

// // eslint.config.js
// const { defineConfig } = require('eslint/config');
// const vue = require('eslint-plugin-vue');
// const tseslint = require('@typescript-eslint/eslint-plugin');
// const tsparser = require('@typescript-eslint/parser');

// module.exports = defineConfig([
//   {
//     // Tell ESLint which files to lint
//     files: ['**/*.ts', '**/*.tsx', '**/*.vue'],

//     languageOptions: {
//       parser: tsparser,
//       parserOptions: {
//         ecmaVersion: 'latest',
//         sourceType: 'module',
//         project: './tsconfig.json',
//         // This is needed so ESLint recognizes ".vue" files in your project
//         extraFileExtensions: ['.vue'],
//       },
//     },

//     // Register plugins
//     plugins: {
//       '@typescript-eslint': tseslint,
//       vue,
//     },

//     // Define rules
//     rules: {
//       // General
//       semi: 'error',
//       'prefer-const': 'error',
//       'no-console': 'warn',
//       'no-debugger': 'warn',

//       // TypeScript
//       '@typescript-eslint/no-unused-vars': [
//         'error',
//         { argsIgnorePattern: '^_' },
//       ],
//       '@typescript-eslint/explicit-module-boundary-types': 'off',

//       // Vue
//       'vue/multi-word-component-names': 'off',
//       'vue/html-indent': ['error', 2, { baseIndent: 1 }],
//       'vue/max-attributes-per-line': [
//         'error',
//         {
//           singleline: 3,
//           multiline: { max: 1 },
//         },
//       ],
//     },
//   },
// ]);

// // eslint.config.js
// const { defineConfig } = require('eslint/config');
// const vue = require('eslint-plugin-vue');
// const tseslint = require('@typescript-eslint/eslint-plugin');
// const tsparser = require('@typescript-eslint/parser');

// module.exports = defineConfig([
//   {
//     files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
//     languageOptions: {
//       parser: tsparser,
//       parserOptions: {
//         ecmaVersion: 'latest',
//         sourceType: 'module',
//         project: './tsconfig.json',
//         extraFileExtensions: ['.vue'], // This fixes the issue
//       },
//     },
//     plugins: {
//       '@typescript-eslint': tseslint,
//       vue,
//     },
//     rules: {
//       // General Best Practices
//       semi: 'error',
//       'prefer-const': 'error',
//       'no-console': 'warn',
//       'no-debugger': 'warn',

//       // TypeScript Rules
//       '@typescript-eslint/no-unused-vars': [
//         'error',
//         { argsIgnorePattern: '^_' },
//       ],
//       '@typescript-eslint/explicit-module-boundary-types': 'off',

//       // Vue Rules
//       'vue/multi-word-component-names': 'off',
//       'vue/html-indent': ['error', 2, { baseIndent: 1 }],
//       'vue/max-attributes-per-line': [
//         'error',
//         { singleline: 3, multiline: { max: 1 } },
//       ],
//     },
//   },
// ]);

// // eslint.config.js
// const { defineConfig } = require('eslint/config');

// module.exports = defineConfig([
//   {
//     rules: {
//       semi: 'error',
//       'prefer-const': 'error',
//     },
//   },
// ]);

// import eslint from '@eslint/js';
// import vue from 'eslint-plugin-vue';
// import tseslint from '@typescript-eslint/eslint-plugin';
// import tsparser from '@typescript-eslint/parser';

// export default [
//   eslint.configs.recommended,
//   {
//     files: ['**/*.ts', '**/*.tsx', '**/*.vue'],
//     languageOptions: {
//       parser: tsparser,
//       parserOptions: {
//         ecmaVersion: 'latest',
//         sourceType: 'module',
//         project: './tsconfig.json'
//       }
//     },
//     plugins: {
//       '@typescript-eslint': tseslint,
//       vue
//     },
//     rules: {
//       // TypeScript Rules
//       '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
//       '@typescript-eslint/explicit-module-boundary-types': 'off',

//       // Vue Rules
//       'vue/multi-word-component-names': 'off',
//       'vue/html-indent': ['error', 2, { baseIndent: 1 }],
//       'vue/max-attributes-per-line': ['error', { singleline: 3, multiline: { max: 1 } }],

//       // General Best Practices
//       'no-console': 'warn',
//       'no-debugger': 'warn'
//     }
//   }
// ];
