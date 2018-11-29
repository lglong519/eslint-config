const standard = {
	'rules': {
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
				'array': false, // 数组和对象都不再强调使用解构赋值
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

module.exports = standard;
