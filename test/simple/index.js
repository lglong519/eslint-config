// simple 使用较为宽松的规则
// 允许 使用 var
var bool = true;
if (bool) {
	// 允许内部定义
	var inner = 'inner';
}
console.log(inner);
const obj = { m: 2 };
// 允许一行定义多个变量
let m = obj.m, n = 2;
console.log(m, n);
