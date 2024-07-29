module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'next/core-web-vitals',
        'plugin:react/recommended',
        'standard',
        'prettier',
        'plugin:import/typescript',
        'plugin:react/jsx-runtime',
        'plugin:import/recommended',
        'plugin:import/warnings',
        'plugin:import/errors',
        'plugin:jsx-a11y/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/style'
    ],
    globals: {
        JSX: true
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2015,
        sourceType: 'module'
    },
    plugins: ['react', 'react-hooks', 'jsx-a11y', 'import', 'jest', '@typescript-eslint'],
    rules: {
        'no-restricted-imports': [
            'error',
            {
                paths: [
                    {
                        name: 'react',
                        importNames: ['default'],
                        message:
                            "Do not import React directly, use the import deconstruction syntax instead. import { ... } from 'react' or import type { ... } from 'react'"
                    }
                ]
            }
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        yoda: 1,
        curly: 0,
        indent: 0,
        eqeqeq: 1,
        'no-else-return': ['error'],
        'consistent-return': ['error'],
        'semi-spacing': 0,
        'no-useless-escape': ['error'],
        'react/prop-types': 2,
        'multiline-ternary': 0,
        semi: ['error', 'always'],
        'react/jsx-uses-react': 0,
        'template-curly-spacing': 0,
        'react/react-in-jsx-scope': 0,
        'jsx-a11y/anchor-is-valid': 1,
        'jsx-a11y/media-has-caption': 1,
        'space-before-function-paren': 0,
        'react/no-unescaped-entities': 0,
        '@next/next/no-img-element': 0,
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': [
            'error',
            { vars: 'all', args: 'all', ignoreRestSiblings: false, argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
        ],
        'no-use-before-define': 0,
        camelcase: 0,

        'import/order': [
            'error',
            {
                distinctGroup: true,
                'newlines-between': 'always',
                warnOnUnassignedImports: true,
                pathGroupsExcludedImportTypes: ['type'],
                pathGroups: [
                    {
                        group: 'unknown',
                        position: 'after',
                        pattern: '@images/**'
                    },
                    {
                        group: 'unknown',
                        position: 'after',
                        pattern: '@src/**'
                    },
                    {
                        group: 'unknown',
                        position: 'after',
                        pattern: '@pages/**'
                    },
                    {
                        group: 'unknown',
                        position: 'after',
                        pattern: '@styles/**'
                    }
                ],
                alphabetize: {
                    order: 'asc',
                    orderImportKind: 'asc',
                    caseInsensitive: true
                },
                groups: ['type', 'builtin', 'external', 'internal', 'unknown', 'parent', 'sibling', 'index', 'object']
            }
        ]
    },
    ignorePatterns: [],
    overrides: [
        {
            files: ['next.config.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off'
            }
        },
        {
            files: ['src/graphql/codegen/fragment-masking.ts'],
            rules: {
                '@typescript-eslint/no-explicit-any': 'off',
                'import/order': 'off'
            }
        }
    ],
    settings: {
        react: {
            version: 'detect'
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
                project: './tsconfig.json'
            }
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx']
        }
    }
};
