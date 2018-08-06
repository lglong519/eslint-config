const typescript = require('./typescript');
const Merge = require('../utils/merge');

const standard = {
	'rules': {
		'valid-jsdoc': [
			'error',
			{
				'requireReturn': false,
			}
		],
		'arrow-parens': [
			2,
			'as-needed'
		],
		'no-var': 2, // [f][s]
		'object-shorthand': 2, // [f][s] 使用简写语法
		'prefer-arrow-callback': 2, // [f][s] 优先使用箭头函数
		'prefer-destructuring': [
			'warn',
			{
				'array': true,
				'object': false
			},
			{
				'enforceForRenamedProperties': true
			}
		], // 优先使用解构赋值
		'prefer-rest-params': 2, // 不使用 arguments
		'prefer-template': 2, // [f][s][m]
	},
};

module.exports = Merge(standard, typescript);
