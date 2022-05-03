const path = require('path');

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

const tsProject = path.resolve(__dirname, './tsconfig.json');

module.exports = {
  overrides: [
    {
      files: ['**/*.js'],
      env: {
        es6: true,
        node: true,
      },
      parserOptions: {
        ecmaVersion: 10,
      },
      extends: ['eslint:recommended', 'prettier'],
    },
    {
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      env: {
        browser: true,
        node: true,
        es6: true,
        // 'jest/globals': true,
      },
      settings: {
        'import/docstyle': ['jsdoc', 'tomdoc'],
        'import/resolver': {
          typescript: {
            project: tsProject,
          },
        },
        react: {
          version: 'detect',
        },
      },
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 12,
        project: tsProject,
        ecmaFeatures: {
          jsx: true,
        },
      },
      extends: [
        'plugin:@next/next/recommended',
        'airbnb',
        'airbnb-typescript',
        'plugin:react-hooks/recommended',
        'plugin:import/typescript',
        'prettier',
      ],
      plugins: [
        '@typescript-eslint',
        'react-hooks',
        'react',
        // '@emotion',
        'import',
        'simple-import-sort',
      ],
      rules: {
        'react/jsx-filename-extension': [ERROR, {extensions: ['.tsx']}],
        'import/extensions': OFF,
        'react/prop-types': OFF,
        'react/jsx-no-bind': OFF,
        'react/require-default-props': OFF,
        '@typescript-eslint/no-explicit-any': WARN,
        '@typescript-eslint/ban-ts-comment': OFF,
        '@typescript-eslint/ban-ts-ignore': OFF,
        '@typescript-eslint/explicit-function-return-type': OFF,
        '@typescript-eslint/explicit-module-boundary-types': OFF,
        'import/no-extraneous-dependencies': [
          ERROR,
          {
            devDependencies: [
              '**/*.test.ts',
              '**/*.test.tsx',
              '**/*.ts',
              '**/*.tsx',
              '**/test-helper/**',
              '**/*.factory.ts',
              '**/*.factory.tsx',
            ],
          },
        ],
        '@typescript-eslint/no-unused-vars': [ERROR, {argsIgnorePattern: '^_'}],
        '@typescript-eslint/naming-convention': [
          ERROR,
          {
            selector: 'interface',
            format: ['PascalCase'],
            // Iから始まるのは禁止
            custom: {
              regex: '^I[A-Z]',
              match: false,
            },
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
        ],
        'react/jsx-props-no-spreading': [
          ERROR,
          {
            html: 'enforce',
            custom: 'ignore',
          },
        ],
        'no-plusplus': OFF,
        // no default export
        'import/prefer-default-export': OFF,
        'import/no-default-export': ERROR,
        'import/no-deprecated': ERROR,
        // https://github.com/lydell/eslint-plugin-simple-import-sort#usage
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
        'sort-imports': OFF,
        'import/order': OFF,
        'simple-import-sort/imports': [
          ERROR,
          {
            groups: [['^\\u0000'], ['^'], ['^@?\\w'], ['^@(js|image)(/.*|$)'], ['^\\.']],
          },
        ],
        'simple-import-sort/exports': ERROR,
        'react/jsx-sort-props': [
          1,
          {
            callbacksLast: true,
            shorthandFirst: true,
            ignoreCase: true,
            noSortAlphabetically: false,
            reservedFirst: true,
          },
        ],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
        'no-use-before-define': OFF,
        '@typescript-eslint/no-use-before-define': ERROR,
        // import React from 'react';は必須ではない
        'react/jsx-uses-react': OFF,
        'react/react-in-jsx-scope': OFF,
        'react/jsx-no-useless-fragment': [ERROR, {allowExpressions: true}],
        'react/function-component-definition': [
          ERROR,
          {namedComponents: 'arrow-function', unnamedComponents: 'arrow-function'},
        ],
        'react/no-unstable-nested-components': [ERROR, {allowAsProps: true}],
        'jsx-a11y/anchor-is-valid': [
          'error',
          {
            components: ['Link'],
            specialLink: ['hrefLeft', 'hrefRight'],
            aspects: ['invalidHref', 'preferButton'],
          },
        ],
      },
    },
    {
      files: ['**/*.test.{ts,tsx}'],
      extends: ['plugin:jest/all', 'plugin:jest-dom/recommended', 'plugin:testing-library/react'],
      plugins: ['testing-library', 'jest-dom', 'jest'],
      rules: {
        'jest/no-hooks': OFF,
        'jest/require-hook': OFF,
      },
    },
    {
      files: ['pages/**/*.{ts,tsx}'],
      plugins: ['import'],
      rules: {
        //'import/prefer-default-export': OFF,
        'import/no-default-export': OFF,
      },
    },
  ],
};
