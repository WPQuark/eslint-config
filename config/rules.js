// Default sets of rules for ESLint

module.exports = {
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
};
