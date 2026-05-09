import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
	js.configs.recommended,
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		plugins: {
			react,
			'react-hooks': reactHooks,
			prettier,
			'@typescript-eslint': typescriptPlugin,
			'unused-imports': unusedImports,
		},
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
				sourceType: 'module',
			},
		},
		rules: {
			// Консоль - только error (прервет коммит)
			'no-console': ['error', { allow: ['warn', 'error'] }],

			// Неиспользуемые переменные - error
			'@typescript-eslint/no-unused-vars': ['error', {
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_',
			}],

			// Удаление неиспользуемых импортов
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': [
				'error',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
				},
			],

			// Предупреждения (не блокируют коммит)
			'react-hooks/exhaustive-deps': ['warn'],
			'@typescript-eslint/no-explicit-any': ['warn'],
			'react/react-in-jsx-scope': 'off',
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
];