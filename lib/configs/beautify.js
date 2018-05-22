const { rules } = require('./standard');
Object.assign(rules, {
	'curly': 2, // [f][m] enforce consistent brace style for all control statements
	'array-bracket-newline': [
		2,
		'always'
	],
	'array-bracket-spacing': 2,
	'array-element-newline': 2,
	'brace-style': 2,
	'block-spacing': 2,
	'object-property-newline': 2,
	'object-curly-newline': [
		2,
		{
			'ObjectExpression': 'always',
			'ObjectPattern': {
				'multiline': true
			},
			'ImportDeclaration': 'never',
			'ExportDeclaration': {
				'multiline': true, 'minProperties': 1
			}
		}
	],
});
module.exports = {
	rules
};
