const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const projectPaths = require('./paths');

const htmlPlugin = new HtmlWebpackPlugin({
	title: 'React config example',
	template: path.resolve(projectPaths.templates, './dev.template.ejs'),
});

const hmrPlugin = new webpack.HotModuleReplacementPlugin();

const jsModuleRule = {
	test: /\.js$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: [
				['@babel/env', {
					useBuiltIns: 'usage',
					corejs: '3.1.3'
				}],
				'@babel/react'
			],
			plugins: [
				['@babel/plugin-transform-runtime', { corejs: 3 }],
				['@babel/plugin-proposal-class-properties', { loose: true }],
				'react-hot-loader/babel',
			]
		}
	}
};

module.exports = {
	entry: [
		'react-hot-loader/patch',
		projectPaths.src,
	],
	output: {
		path: projectPaths.dist,
	},
	resolve: {
		alias: {
			'react-dom': '@hot-loader/react-dom',
		},
		modules: ['node_modules', projectPaths.src],
	},
	devServer: {
		contentBase: projectPaths.dist,
		hot: true,
	},
	plugins: [htmlPlugin, hmrPlugin],
	module: {
		rules: [jsModuleRule]
	}
}
