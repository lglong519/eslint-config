/*
 * https://eslint.org/docs/rules/
 * The extends property value can omit the eslint-config- prefix of the package name.
 */
module.exports = {
	'root': true,
	'parserOptions': {
		'ecmaVersion': 6,
		'sourceType': 'module',
		'ecmaFeatures': {
			'parser': 'babel-eslint',
			'jsx': true,
		},
	},
	'env': {
		'node': true,
		'es6': true,
		browser: true,
	},
	'globals': {
		'define': true,
	},
	'rules': {
		// Possible Errors
		'for-direction': 2, // [m] enforce “for” loop update clause moving the counter in the right direction.
		'getter-return': 0,
		'no-await-in-loop': 0,
		'no-compare-neg-zero': 2, // Disallow comparing against -0
		'no-cond-assign': 2, // [r][m] disallow assignment operators in conditional expressions,if(c=a+b){}
		'no-console': 0, // [r][m]
		'no-constant-condition': 2, // [r] disallow constant expressions in conditions,while(true)
		'no-control-regex': 2, // [r] disallow control characters in regular expressions
		'no-debugger': 0, // [r][m]
		'no-dupe-args': 2,
		'no-dupe-keys': 2,
		'no-duplicate-case': 2,
		'no-empty': 2,
		'no-empty-character-class': 2,
		'no-ex-assign': 2,
		'no-extra-boolean-cast': 2,
		'no-extra-parens': 2,
		'no-extra-semi': 2,
		'no-func-assign': 2,
		'no-inner-declarations': 2,
		'no-invalid-regexp': 2,
		'no-irregular-whitespace': 2,
		'no-obj-calls': 2,
		'no-prototype-builtins': 0,
		'no-regex-spaces': 2,
		'no-sparse-arrays': 2,
		'no-template-curly-in-string': 0,
		'no-unexpected-multiline': 2,
		'no-unreachable': 2,
		'no-unsafe-finally': 2,
		'no-unsafe-negation': 2,
		'use-isnan': 2,
		'valid-jsdoc': 2,
		'valid-typeof': 2,
		// Best Practices
		'accessor-pairs': 0, // Enforce getter and setter pairs in objects
		'array-callback-return': 0, // Enforce return statements in callbacks of array methods
		'block-scoped-var': 0, //
		'class-methods-use-this': 0, //
		'complexity': 0, //
		'consistent-return': 0, //
		'curly': 0, // [f][m] enforce consistent brace style for all control statements
		'default-case': 0, //
		'dot-location': 2, //
		'dot-notation': 2, //
		'eqeqeq': 1, //
		'guard-for-in': 0, //
		'no-alert': 0, //
		'no-caller': 0, //
		'no-case-declarations': 2, //
		'no-div-regex': 0, //
		'no-else-return': 2, //
		'no-empty-function': 1, // [m]
		'no-empty-pattern': 2, //
		'no-eq-null': 0, //
		'no-eval': 0, //
		'no-extend-native': 0, //
		'no-extra-bind': 2, //
		'no-extra-label': 2, //
		'no-fallthrough': 2, //
		'no-floating-decimal': 2, //
		'no-global-assign': 2, //
		'no-implicit-coercion': 2, //
		'no-implicit-globals': 0, //
		'no-implied-eval': 0, //
		'no-invalid-this': 0, //
		'no-iterator': 0, //
		'no-labels': 0, //
		'no-lone-blocks': 0, //
		'no-loop-func': 0, //
		'no-magic-numbers': 0, // 含义不明确的数字
		'no-multi-spaces': 2, //
		'no-multi-str': 0, //
		'no-new': 0, //
		'no-new-func': 0, //
		'no-new-wrappers': 0, //
		'no-octal': 2, //
		'no-octal-escape': 0, //
		'no-param-reassign': 0, //
		'no-proto': 0, //
		'no-redeclare': 2, //
		'no-restricted-properties': 0, //
		'no-return-assign': 0, //
		'no-return-await': 0, //
		'no-script-url': 0, //
		'no-self-assign': 2, //
		'no-self-compare': 0, //
		'no-sequences': 0, //
		'no-throw-literal': 0, //
		'no-unmodified-loop-condition': 0, //
		'no-unused-expressions': 0, //
		'no-unused-labels': 2, //
		'no-useless-call': 0, //
		'no-useless-concat': 0, //
		'no-useless-escape': 2, //
		'no-useless-return': 2, //
		'no-void': 0, //
		'no-warning-comments': 0, //
		'no-with': 0, //
		'prefer-promise-reject-errors': 0, //
		'radix': 0, //
		'require-await': 0, //
		'vars-on-top': 0, //
		'wrap-iife': 2, //
		'yoda': 2, //
		// Strict Mode
		'strict': 2, //
		// Variables
		'init-declarations': 0, //
		'no-catch-shadow': 0, //
		'no-delete-var': 2, //
		'no-label-var': 0, //
		'no-restricted-globals': 0, //
		'no-shadow': 0, //
		'no-shadow-restricted-names': 0, //
		'no-undef': 2, //
		'no-undef-init': 2, //
		'no-undefined': 0, //
		'no-unused-vars': 2, //
		'no-use-before-define': 2, //
		// Node.js and CommonJS
		'callback-return': 0, //
		'global-require': 0, //
		'handle-callback-err': 0, //
		'no-buffer-constructor': 0, //
		'no-mixed-requires': 0, //
		'no-new-require': 0, //
		'no-path-concat': 0, //
		'no-process-env': 0, //
		'no-process-exit': 0, //
		'no-restricted-modules': 0, //
		'no-sync': 0, //
		// Stylistic Issues
		'array-bracket-newline': 2, //
		'array-bracket-spacing': 2, //
		'array-element-newline': 2, //
		'block-spacing': 2, //
		'brace-style': 2, //
		'camelcase': 0, //
		'capitalized-comments': 0, // [f][m]
		'comma-dangle': [
			'error',
			{
				'arrays': 'never',
				'objects': 'ignore',
				'imports': 'never',
				'exports': 'never',
				'functions': 'never',
			}
		], // [f][m] Require or disallow trailing commas
		'comma-spacing': 2, //
		'comma-style': 2, // enforce consistent comma style
		'computed-property-spacing': [
			2,
			'never'
		], // enforce consistent spacing inside computed property brackets,"never" 没有空格,"always" 有空格
		'consistent-this': 0, //
		'eol-last': 1, // [f][m] require or disallow newline at the end of files
		'func-call-spacing': 2, //
		'func-name-matching': 0, //
		'func-names': 0, //
		'func-style': [
			0,
			'declaration'
		], //
		'function-paren-newline': 2, //
		'id-blacklist': 0, //
		'id-length': 0, //
		'id-match': 0, //
		'implicit-arrow-linebreak': 2, //
		'indent': [
			'error',
			'tab'
		], //
		'jsx-quotes': 2, //
		'key-spacing': [
			2,
			{
				'beforeColon': false,
				'afterColon': true,
			}
		], //
		'keyword-spacing': 2, //
		'line-comment-position': 0, //
		'linebreak-style': [
			0,
			'windows'
		], // enforce consistent linebreak style
		'lines-around-comment': 2, //
		'lines-between-class-members': 2, //
		'max-depth': 0, //
		'max-len': 0, //
		'max-lines': 0, //
		'max-nested-callbacks': 0, //
		'max-params': 0, //
		'max-statements': 0, //
		'max-statements-per-line': 0, //
		'multiline-comment-style': 2, //
		'multiline-ternary': 0, //
		'new-cap': 0, //
		'new-parens': 0, // [f][m] require parentheses when invoking a constructor with no arguments
		'newline-per-chained-call': 0, // [f][m] require a newline after each call in a method chain
		'no-array-constructor': 0, //
		'no-bitwise': 0, //
		'no-continue': 0, //
		'no-inline-comments': 0, //
		'no-lonely-if': 2, //
		'no-mixed-operators': 0, //
		'no-mixed-spaces-and-tabs': 2, //
		'no-multi-assign': 0, //
		'no-multiple-empty-lines': 2, //
		'no-negated-condition': 0, //
		'no-nested-ternary': 0, //
		'no-new-object': 0, //
		'no-plusplus': 0, //
		'no-restricted-syntax': 0, //
		'no-tabs': 0, //
		'no-ternary': 0, //
		'no-trailing-spaces': 2, // [f]
		'no-underscore-dangle': 0, //
		'no-unneeded-ternary': 2, // [f]
		'no-whitespace-before-property': 2, // [f]
		'nonblock-statement-body-position': 2, // [f]
		'object-curly-newline': 0, // [f] enforce consistent line breaks inside braces
		'object-curly-spacing': 2, // [f]
		'object-property-newline': 2, // [f]
		'one-var': 0, //
		'one-var-declaration-per-line': 2, // [f]
		'operator-assignment': 2, // [f]
		'operator-linebreak': 2, // [f]
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
		'semi-spacing': 2, //
		'semi-style': 2, //
		'sort-keys': 0, //
		'sort-vars': 0, // [f][m]
		'space-before-blocks': 2, // 强制在块之前使用一致的空格
		'space-before-function-paren': [
			2,
			'always'
		], //
		'space-in-parens': 2, // 圆括号内使用一致的空格
		'space-infix-ops': 2, // 要求操作符周围有空格
		'space-unary-ops': 2, // 在一元操作符前后使用一致的空格
		'spaced-comment': 2, // 在注释中 // 或 /* 使用一致的空格
		'switch-colon-spacing': 2, //
		'template-tag-spacing': 2, //
		'unicode-bom': 2, // Require or disallow Unicode byte order mark (BOM) 字节顺序标记=>Unicode 签名
		'wrap-regex': 2, // Require parenthesis around regex literals
		// ECMAScript 6
		'arrow-body-style': 2, // [f]
		'arrow-parens': 2, // [f]
		'arrow-spacing': 2, // [f] 强制箭头函数的箭头前后使用一致的空格
		'constructor-super': 2, // [r]
		'generator-star-spacing': 2, // [f]
		'no-class-assign': 2, // [f]
		'no-confusing-arrow': 2, // [f]
		'no-const-assign': 2, // [r]
		'no-dupe-class-members': 2, // [r]
		'no-duplicate-imports': 2, // [f]
		'no-new-symbol': 2, // [r]
		'no-restricted-imports': 0, //
		'no-this-before-super': 2, // [r]
		'no-useless-computed-key': 2, // [f]
		'no-useless-constructor': 0, //
		'no-useless-rename': 2, // [f]
		'no-var': 2, // [f]
		'object-shorthand': 2, // [f]
		'prefer-arrow-callback': 2, // [f]
		'prefer-const': 0, // [f][] require const declarations for variables that are never reassigned after declared
		'prefer-destructuring': 0, //
		'prefer-numeric-literals': 2, // [f]
		'prefer-rest-params': 0, //
		'prefer-spread': 2, // [f]
		'prefer-template': 2, // [f]
		'require-yield': 2, // [r]
		'rest-spread-spacing': 2, // [f]
		'sort-imports': 2, // [f]
		'symbol-description': 0,
		'template-curly-spacing': 2, // [f]
		'yield-star-spacing': 2, // [f]
	},
};
