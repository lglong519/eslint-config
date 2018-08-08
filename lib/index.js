const Merge = require('./utils/merge');
const base = require('./configs/base');
const standard = require('./configs/standard');
const weapp = require('./configs/weapp');
const beautify = require('./configs/beautify');
const simple = require('./configs/simple');
const typescript = require('./configs/typescript');

module.exports.standard = Merge(base, Merge(standard, typescript));
module.exports.weapp = Merge(base, weapp);
module.exports.beautify = Merge(base, beautify);
module.exports.simple = Merge(base, simple);
