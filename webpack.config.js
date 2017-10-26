var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')

var data = require('./data')

module.exports = {
	entry: './entry.js',

	output: {
	filename: 'bundle.js',
	path: __dirname + "/dist",
	libraryTarget: 'umd'
},

module: {
	rules: [
	{test: /\.jsx$/, loader: 'jsx-loader'}
	]
},

plugins: [
	new StaticSiteGeneratorPlugin('bundle.js', data.routes, data)
	]
}
