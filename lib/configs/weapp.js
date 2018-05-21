module.exports = {
	'globals': {
		wx: false,
		App: false,
		getApp: false,
		Page: false,
		getCurrentPages: false,
	},
	'rules': {
		'space-before-function-paren': [
			2,
			{
				'anonymous': 'always',
				'named': 'never',
				'asyncArrow': 'always'
			}
		],
	},
};
