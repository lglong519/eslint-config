const { rules } = require('./base');
const simpleKeys = [
	'eqeqeq',
	'no-var',
	'no-inner-declarations',
	'one-var-declaration-per-line',
];
simpleKeys.forEach(item => rules[item] && (rules[item] = 0));
module.exports = {
	rules
};
