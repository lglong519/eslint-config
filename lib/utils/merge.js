const keys = require('./keys');

module.exports = (source, target) => {
	let config = {};
	keys.forEach(key => {
		if (!target[key] && !source[key]) {
			return;
		}
		if (!target[key] && source[key]) {
			config[key] = source[key];
			return;
		}
		if (target[key] && !source[key]) {
			config[key] = target[key];
			return;
		}
		if (typeof target[key] !== 'object' && typeof source[key] !== 'object') {
			config[key] = target[key];
			return;
		}
		config[key] = Object.assign({}, source[key], target[key]);
	});
	return config;
};
