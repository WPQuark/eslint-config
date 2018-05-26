// Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
	},
	extends: [
		'plugin:jest/recommended',
		'airbnb',
		'plugin:prettier/recommended',
		'prettier/react',
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2018,
		ecmaFeatures: {
			jsx: true,
		},
		sourceType: 'module',
	},
	rules: {
		'react/no-unused-prop-types': 1,
		'react/no-unused-state': 1,
		'no-unused-vars': 1,
		'prettier/prettier': ['error'],
		'no-console': 0,
		'no-plusplus': [
			2,
			{
				allowForLoopAfterthoughts: true,
			},
		],
	},
};
