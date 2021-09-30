module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
			'prettier/prettier': 'error',
			'react/jsx-filename-extension': [
			  'warn',
			  {extensions: ['.js', '.jsx']}
			],
			'import/prefer-default-export': 'off',
			'jsx-quotes': ['error', 'prefer-single'],
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
	},
};
