module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{png,html,js,css}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};