module.exports = {
  root: true,
  parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 2017,
		sourceType: 'module'
	},
	env: {
		es6: true,
		browser: true,
		mocha: true,
		node: true
  },
  extends: [
		'eslint:recommended',
		'plugin:vue/recommended'
	],
  // add your custom rules here
  'rules': {
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		'no-unused-vars': [1, { 'vars': 'all', 'args': 'after-used' }],
		'no-multiple-empty-lines': [1, { 'max': 1 }],
		'no-trailing-spaces': [1, { "skipBlankLines": true, "ignoreComments": true }],
		'padded-blocks': [1, { "blocks": "never" }]
  },
  globals: {
    requestAnimationFrame: true,
    performance: true
  }
};
