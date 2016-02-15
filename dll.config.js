var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');

module.exports = {
	entry: {
		libs: [
			'react',
			'moment',
			'babel-polyfill',
			'lifespan',
			'nexus-flux',
			'remutable',
			'bluebird',
			'react-router',
			'jszip',
			'xxhashjs',
			'pouchdb',
			'pouchdb-hoodie-api',
		],
	},
	module: {
		noParse: [
			/(levelup|lifespan|nexus-flux|remutable)/
		]
	},
	output: {
		path: path.join(__dirname, 'dist/dll/'),
		filename: '[name].dll.js',
		library: '[name]_[hash]',
		libraryTarget: 'this'
	},
	plugins: [
		new webpack.DllPlugin({
			path: path.join(__dirname, 'dist/dll/', '[name]-manifest.json'),
			name: '[name]_[hash]',
		})
	],
}