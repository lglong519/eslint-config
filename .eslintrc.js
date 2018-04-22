/*
 * https://eslint.org/docs/rules/
 * The extends property value can omit the eslint-config- prefix of the package name.
 * [r] recommend
 * [f] fixable
 * [m] modify
 * [s] Specially for ES6
 */
module.exports = {
	'root': true,
	'parserOptions': {
		'ecmaVersion': 6,
		'sourceType': 'module',
		'ecmaFeatures': {
			'parser': 'babel-eslint',
			'jsx': true,
			experimentalObjectRestSpread: true,
		},
	},
	'env': {
		browser: true,
		node: true,
		commonjs: true,
		'shared-node-browser': true,
		es6: true,
		worker: true,
		amd: true,
		mocha: true,
		// jasmine: true,
		// jest: true,
		// phantomjs: true,
		// protractor: true,
		// qunit: true,
		// prototypejs: true,
		// shelljs: true,
		// meteor: true,
		mongo: true,
		// applescript: true,
		// nashorn: true,
		serviceworker: true,
		// atomtest: true,
		// embertest: true,
		// webextensions: true,
		// greasemonkey: true,
	},
	'plugins': [
		'html' // 支持 html/vue
	],
	'globals': {
		wx: false,
		getApp: false,
		Page: false,
		getCurrentPages: false,
	},
	'rules': {
		// *** Possible Errors
		'for-direction': 2, // [m] enforce “for” loop update clause moving the counter in the right direction.
		'getter-return': 0,
		'no-await-in-loop': 0,
		'no-compare-neg-zero': 2, // Disallow comparing against -0
		'no-cond-assign': 2, // [r][m] disallow assignment operators in conditional expressions,if(c=a+b){}
		'no-console': 0, // [r][m]
		'no-constant-condition': 2, // [r] disallow constant expressions in conditions,while(true)
		'no-control-regex': 2, // [r] disallow control characters in regular expressions
		'no-debugger': 0, // [rf][m]
		'no-dupe-args': 2, // [r] disallow duplicate arguments in function definitions
		'no-dupe-keys': 2, // [r] disallow duplicate keys in object literals
		'no-duplicate-case': 2, // [r] disallow duplicate test expressions in case clauses of switch statements.
		'no-empty': 2, // [r] disallow empty block statements
		'no-empty-character-class': 2, // [r] disallow empty character classes in regular expressions,e.g. []
		'no-ex-assign': 2, // [r] disallow reassigning exceptions(exceptions === e) in catch clauses
		'no-extra-boolean-cast': 2, // [rf] disallow unnecessary boolean casts,e.g. use Boolean instead of !!
		'no-extra-parens': 2, // [f]
		'no-extra-semi': 2, // [rf]
		'no-func-assign': 2, // [r]
		'no-inner-declarations': [
			'error',
			'both'	// [r] 'functions'(default) or 'both'(function and var)
		],
		'no-invalid-regexp': 2, // [r] (default) { "allowConstructorFlags": ["u", "y"] }
		'no-irregular-whitespace': 2, // [r] disallow irregular whitespace outside of strings and comments
		'no-obj-calls': 2, // [r] disallows calling the Math, JSON and Reflect objects as functions.
		'no-prototype-builtins': 0, // disallows calling some Object.prototype methods directly on object instances
		'no-regex-spaces': 2, // [rf] disallow multiple spaces
		'no-sparse-arrays': 2, // [r] e.g. [,]
		'no-template-curly-in-string': 0,
		'no-unexpected-multiline': 2, // [r] disallow confusing multiline expressions
		'no-unreachable': 2, // [r] disallow unreachable code after return, throw, continue, and break statements
		'no-unsafe-finally': 2, // [r]
		'no-unsafe-negation': 2, // [rf]
		'use-isnan': 2, // [r] require calls to isNaN() when checking for NaN
		'valid-jsdoc': [
			'error',
			{
				'requireReturn': false,
			}
		], // [f][m]
		'valid-typeof': 2, // [r] enforce comparing typeof expressions against valid strings,e.g. typeof foo === "strng"
		// *** Best Practices
		'accessor-pairs': 0, // Enforce getter and setter pairs in objects
		'array-callback-return': 0, // Enforce return statements in callbacks of array methods
		'block-scoped-var': 0, //
		'class-methods-use-this': 0, //
		'complexity': 0, //
		'consistent-return': 0, //
		'curly': 0, // [f][m] enforce consistent brace style for all control statements
		'default-case': 0, //
		'dot-location': [
			2,
			'property'
		], // [f]
		'dot-notation': 2, // [f] 属性尽可能地使用点号
		'eqeqeq': 1, // [f]
		'guard-for-in': 0, //
		'no-alert': 0, //
		'no-caller': 0, //
		'no-case-declarations': 2, // [r] 不允许在 case 子句中使用词法声明
		'no-div-regex': 0, // 禁止除法操作符显式的出现在正则表达式开始的位置
		'no-else-return': 2, // [f]
		'no-empty-function': 1, // [m]
		'no-empty-pattern': 2, // [r] 禁止使用空解构模式
		'no-eq-null': 0, // 禁止在没有类型检查操作符的情况下与 null 进行比较
		'no-eval': 0, //
		'no-extend-native': 0, // 禁止扩展原生类型
		'no-extra-bind': 2, // [f]
		'no-extra-label': 2, // [f]
		'no-fallthrough': 2, // [r] 禁止 case 语句落空
		'no-floating-decimal': 0, // [f][m]
		'no-global-assign': 2, // [r]
		'no-implicit-coercion': 0, // [f][m] 禁止使用短符号进行类型转换
		'no-implicit-globals': 0, // 禁止在全局范围内使用变量声明和 function 声明
		'no-implied-eval': 0, // 禁止使用类似 eval() 的方法
		'no-invalid-this': 0, // 禁止 this 关键字出现在类和类对象之外
		'no-iterator': 0, // 禁用 __iterator__ 属性
		'no-labels': 0, //
		'no-lone-blocks': 0, // 禁用不必要的嵌套块
		'no-loop-func': 0, // 禁止在循环中出现 function 声明和表达式
		'no-magic-numbers': 0, // 含义不明确的数字
		'no-multi-spaces': 2, // [f]
		'no-multi-str': 0, //
		'no-new': 0, // new 必需赋值
		'no-new-func': 0, //
		'no-new-wrappers': 0, // 禁止对 String 等使用 new
		'no-octal': 2, // [r] 禁用八进制字面量
		'no-octal-escape': 0, // 禁止在字符串中使用八进制转义序列
		'no-param-reassign': 0, // 禁止对 function 的参数进行重新赋值
		'no-proto': 0, //
		'no-redeclare': 2, // [r]
		'no-restricted-properties': 0, // 禁止使用对象的某些属性
		'no-return-assign': 2, // [m] 禁止在 return 语句中使用赋值语句
		'no-return-await': 0, //
		'no-script-url': 0, // 禁止使用 javascript: url
		'no-self-assign': 2, // [r]
		'no-self-compare': 0, //
		'no-sequences': 0, // 禁用逗号操作符
		'no-throw-literal': 2, // [m] 禁止抛出异常字面量
		'no-unmodified-loop-condition': 0, //
		'no-unused-expressions': 0, //
		'no-unused-labels': 2, // [rf]
		'no-useless-call': 0, //
		'no-useless-concat': 0, //
		'no-useless-escape': 2, // [r] 禁用不必要的转义字符
		'no-useless-return': 2, // [f]
		'no-void': 0, //
		'no-warning-comments': 0, //
		'no-with': 0, //
		'prefer-promise-reject-errors': 0, // 要求使用 Error 对象作为 Promise 拒绝的原因
		'radix': 0, // 强制在parseInt()使用基数参数
		'require-await': 0, // async 函数必带 await
		'vars-on-top': 0, //
		'wrap-iife': 2, //
		'yoda': 0, // [m]
		// *** Strict Mode
		'strict': [
			2,
			'safe'
		], //
		// *** Variables
		'init-declarations': 0, //
		'no-catch-shadow': 2, // [m] catch 参数不与外部变量同名
		'no-delete-var': 2, // [r]
		'no-label-var': 0, //
		'no-restricted-globals': 0, // 禁用特定的全局变量
		'no-shadow': 0, //
		'no-shadow-restricted-names': 2, // [m] 禁止重定义关键字
		'no-undef': 2, // [r] 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
		'no-undef-init': 2, // [f] 禁止将变量初始化为 undefined
		'no-undefined': 2, // [m] 禁止将 undefined 作为标识符
		'no-unused-vars': 2, // [r]
		'no-use-before-define': 2, //
		// *** Node.js and CommonJS
		'callback-return': 0, //
		'global-require': 0, //
		'handle-callback-err': 0, //
		'no-buffer-constructor': 0, //
		'no-mixed-requires': 0, //
		'no-new-require': 2, // [m]
		'no-path-concat': 0, //
		'no-process-env': 0, //
		'no-process-exit': 0, //
		'no-restricted-modules': 0, //
		'no-sync': 0, //
		// *** Stylistic Issues
		'array-bracket-newline': [
			2,
			'consistent'
		], // [f][m] 数组括号强制换行,consistent:一致的换行符
		'array-bracket-spacing': 2, // [f] 在括号内使用空格
		'array-element-newline': [
			0,
			{
				multiline: true, // 当某个元素内有换行时，其他元素全部换行
				minItems: 2
			},
		], // [f][m] 数组元素间使用换行
		'block-spacing': 2, // [f]
		'brace-style': 2, // [f] 代码块中使用一致的大括号风格
		'camelcase': 0, //
		'capitalized-comments': 0, // [f][m] 首字母大写
		'comma-dangle': [
			'error',
			{
				'arrays': 'ignore',
				'objects': 'ignore',
				'imports': 'never',
				'exports': 'never',
				'functions': 'never',
			}
		], // [f][m] Require or disallow trailing commas
		'comma-spacing': 2, // [f] 逗号前后使用一致的空格
		'comma-style': 2, // enforce consistent comma style
		'computed-property-spacing': [
			2,
			'never'
		], // [f] enforce consistent spacing inside computed property brackets,"never" 没有空格,"always" 有空格
		'consistent-this': 0, // 上下文使用一致的命名
		'eol-last': 2, // [f][m] require or disallow newline at the end of files
		'func-call-spacing': 2, // [f] 函数名与括号间的空格
		'func-name-matching': 0, // var foo = function foo() {};
		'func-names': 0, // 禁止匿名函数
		'func-style': [
			0,
			'declaration'
		], // 使用一致的定义函数的风格
		'function-paren-newline': 2, // [f] 函数括号内使用一致的换行
		'id-blacklist': 0, // 禁用指定的标识符
		'id-length': 0, //
		'id-match': 0, // 标识符匹配特定的正则表达式
		'implicit-arrow-linebreak': 2, // [f]
		'indent': [
			'error',
			'tab'
		], // [f]
		'jsx-quotes': 2, // [f]
		'key-spacing': [
			2,
			{
				'beforeColon': false,
				'afterColon': true,
			}
		], // [f]
		'keyword-spacing': 2, // [f]
		'line-comment-position': 0, //
		'linebreak-style': [
			0,
			'windows' 	// [f] unix or windows
		], // enforce consistent linebreak style
		'lines-around-comment': 2, // [f]
		'lines-between-class-members': 2, // [f]
		'max-depth': 0, //
		'max-len': 0, // 一行的最大长度
		'max-lines': 0, //
		'max-nested-callbacks': 0, // 回调嵌套
		'max-params': 0, // 参数数量
		'max-statements': 0, //
		'max-statements-per-line': 0, //
		'multiline-comment-style': 0, // [f][m]
		'multiline-ternary': 0, //
		'new-cap': 2, // [m] 构造函数首字母大写
		'new-parens': 0, // [f][m] require parentheses when invoking a constructor with no arguments
		'newline-per-chained-call': 0, // [f][m] require a newline after each call in a method chain
		'no-array-constructor': 0, //
		'no-bitwise': 0, // 按位运算符
		'no-continue': 0, //
		'no-inline-comments': 0, //
		'no-lonely-if': 2, // [f]
		'no-mixed-operators': 0, //
		'no-mixed-spaces-and-tabs': 2, // [r]
		'no-multi-assign': 0, // 禁止连续赋值
		'no-multiple-empty-lines': [
			'error',
			{
				max: 1,
				maxBOF: 1,
				maxEOF: 0
			}
		], // [f][m]
		'no-negated-condition': 0, // if(!a){}
		'no-nested-ternary': 0, // 嵌套三元表达式
		'no-new-object': 0, //
		'no-plusplus': 0, //
		'no-restricted-syntax': 0, // 禁用指定的语法，如 with(){}
		'no-tabs': 0, //
		'no-ternary': 0, //
		'no-trailing-spaces': 2, // [f]
		'no-underscore-dangle': 2, // 禁用 /^_|_$/
		'no-unneeded-ternary': 2, // [f] 优先不使用三元
		'no-whitespace-before-property': 2, // [f]
		'nonblock-statement-body-position': 2, // [f] 没大括号的条件语句主体必需同一行
		'object-curly-newline': [
			2,
			{
				consistent: true
			}
		], // [f] enforce consistent line breaks inside braces
		'object-curly-spacing': [
			2,
			'always'
		], // [f]
		'object-property-newline': [
			2,
			{
				allowAllPropertiesOnSameLine: true
			}
		], // [f] enforce placing object properties on separate lines
		'one-var': 0, //
		'one-var-declaration-per-line': [
			2,
			'always'
		], // [f][m] 连续声明必需换行
		'operator-assignment': 2, // [f] 简化赋值操作 str+'s' => `${str}s`
		'operator-linebreak': [2, 'before'], // [f] 换行使用一致风格的操作符
		'padded-blocks': [
			2,
			{
				'classes': 'always'
			}
		], // [f] require or disallow padding within blocks
		'padding-line-between-statements': 2, //
		'quote-props': 0, // [f] require quotes around object literal property names
		'quotes': [
			'error',
			'single'
		], // [f][m] enforce the consistent use of either backticks, double, or single quotes
		'require-jsdoc': 0, //
		'semi': [
			'error',
			'always'
		], //
		'semi-spacing': [
			2,
			{
				'before': false,
				'after': true
			}
		], // [f] enforce consistent spacing before and after semicolons
		'semi-style': [
			2,
			'last'
		], // [f] enforce location of semicolons
		'sort-keys': 0, //
		'sort-vars': 0, // [f][m] 如果变量已赋值将无法排序
		'space-before-blocks': 2, // 强制在块之前使用一致的空格
		'space-before-function-paren': [
			2,
			'always'
		], // [f]
		'space-in-parens': 2, // [f] 圆括号内使用一致的空格
		'space-infix-ops': 2, // [f] 要求操作符周围有空格
		'space-unary-ops': 2, // [f] 在一元操作符前后使用一致的空格
		'spaced-comment': 2, // [f] 在注释中 // 或 /* 使用一致的空格
		'switch-colon-spacing': 2, // [f]
		'template-tag-spacing': 2, // [f]
		'unicode-bom': 2, // [f] Require or disallow Unicode byte order mark (BOM) 字节顺序标记=>Unicode 签名
		'wrap-regex': 2, // [f] Require parenthesis around regex literals
		// *** ECMAScript 6
		'arrow-body-style': [
			2,
			'as-needed'
		], // [f]
		'arrow-parens': [
			2,
			'as-needed'
		], // [f]
		'arrow-spacing': 2, // [f] 强制箭头函数的箭头前后使用一致的空格
		'constructor-super': 2, // [r] 在构造函数中有 super() 的调用
		'generator-star-spacing': [
			2,
			{
				'before': false, 'after': true
			}
		], // [f]
		'no-class-assign': 2, // [f]
		'no-confusing-arrow': 0, // [f][m]
		'no-const-assign': 2, // [r]
		'no-dupe-class-members': 2, // [r] 禁止类成员中出现重复的名称
		'no-duplicate-imports': 2, // [f]
		'no-new-symbol': 2, // [r]
		'no-restricted-imports': 0, // 禁止 import 指定的模块
		'no-this-before-super': 2, // [r]
		'no-useless-computed-key': 2, // [f]
		'no-useless-constructor': 2, // [m]
		'no-useless-rename': 2, // [f]
		'no-var': 2, // [f][s]
		'object-shorthand': 2, // [f][s] 使用简写语法
		'prefer-arrow-callback': 2, // [f][s] 优先使用箭头函数
		'prefer-const': 0, // [f][m] require const declarations for variables that are never reassigned after declared
		'prefer-destructuring': 0, //
		'prefer-numeric-literals': 2, // [f]
		'prefer-rest-params': 0, //
		'prefer-spread': 2, // [f]
		'prefer-template': 2, // [f][s]
		'require-yield': 2, // [r] 要求 generator 函数内有 yield
		'rest-spread-spacing': [
			2,
			'never'
		], // [f] 默认值 "never"
		'sort-imports': 2, // [f]
		'symbol-description': 1, // [m] 此处应有描述
		'template-curly-spacing': 2, // [f]
		'yield-star-spacing': [
			2,
			{
				'before': false, 'after': true
			}
		], // [f]
	},
};
