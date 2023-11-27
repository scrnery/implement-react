import path from 'path';
import fs from 'fs';
import ts from 'rollup-plugin-typescript2';
import cjs from '@rollup/plugin-commonjs';

const pkgPath = path.resolve(__dirname, '../../packages');
const outPut = path.resolve(__dirname, '../../dist/node_modules');

// 需要根据package name获取到路径的方法， 路径分为输入和输出
// 可以根据路径获取到package.json的内容

export const getPackagePath = (name, isOutPut) => {
	if (isOutPut) {
		return `${outPut}/${name}`;
	}
	return `${pkgPath}/${name}`;
};

export const getPackageJson = (name) => {
	let pkgPath = `${getPackagePath(name)}/package.json`;
	const content = fs.readFileSync(pkgPath, { encoding: 'utf-8' });
	return JSON.parse(content);
};

export function getBaseRollupPlugins({ typescript = {} } = {}) {
	return [cjs(), ts(typescript)];
}
