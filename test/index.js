/* Do not try to modify this file */

// fs 路径以命令行为准
const fs = require('fs');
let basicPath = 'node_modules/eslint-config-lglong519';
let targetPath = `test/${basicPath}`;
let ckeckPathA = `${basicPath}/lib/configs`;
let ckeckPathB = `${basicPath}/lib/utils`;
// package 复制到 targetPath
[ckeckPathA, ckeckPathB].forEach(ckeckPath => {
	fs.exists(ckeckPath, res => {
		if (!res) {
			makeDir(ckeckPath);
		}
		readdir('./', targetPath);
	});
});

function makeDir (path) {
	let paths = path.split('/');
	let target = __dirname;
	paths.forEach(elem => {
		if (!elem || elem === '.') {
			return;
		}
		target += `/${elem}`;
		if (!fs.existsSync(target)) {
			fs.mkdirSync(target);
		}
	});
}

/**
 * @description 遍历 dir 下所有文件/文件夹，复制到 targetPath
 * @param {String} dir 将要读取的目录
 * @param {*} targetPath 目标文件路径
 */
function readdir (dir, targetPath) {
	fs.readdir(dir, (err, files) => {
		if (err) {
			console.trace(err);
		} else {
			files.forEach(item => {
				if (/^\.|\.md$|test|^\.git$|node_modules/.test(item)) {
					console.log('Omit file/path:', item);
					return;
				}
				item = item.replace('./', '');
				console.log('Update file/path:', item);

				let source = `${dir}/${item}`;
				let stats = fs.statSync(source);
				if (stats.isFile()) {
					copyFile(`${targetPath}/${source}`, source);
				}
				if (stats.isDirectory()) {
					readdir(source, targetPath);
				}
			});
		}
	});

}

function copyFile (target, source) {
	fs.createReadStream(source).pipe(fs.createWriteStream(target));
}
