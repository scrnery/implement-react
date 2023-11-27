import { getBaseRollupPlugins, getPackagePath } from './utils';
import generatePackageJson from 'rollup-plugin-generate-package-json';

const reactModulePath = getPackagePath('react');

const outPutPath = getPackagePath('react', true);

export default [
	// react
	{
		input: `${reactModulePath}/index.ts`,
		output: {
			file: `${outPutPath}/index.js`,
			format: 'umd',
			name: 'index.js'
		},
		plugins: [
			...getBaseRollupPlugins(),
			generatePackageJson({
				inputFolder: reactModulePath,
				outputFolder: outPutPath,
				baseContents: ({ name, description, version }) => ({
					name,
					description,
					version,
					main: 'index.js'
				})
			})
		]
	},

	// jsx-runtime
	{
		input: `${reactModulePath}/src/jsx.ts`,
		output: [
			{
				file: `${outPutPath}/jsx-runtime.js`,
				format: 'umd',
				name: 'jsx-runtime.js'
			},
			{
				file: `${outPutPath}/jsx-dev-runtime.js`,
				format: 'umd',
				name: 'jsx-dev-runtime.js'
			}
		],
		plugins: getBaseRollupPlugins()
	}
];
