/* eslint-env node, es6 */
module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-banana-checker');

	grunt.initConfig({
		banana: {
			all: 'i18n/'
		},
		eslint: {
			options: {
				cache: true
			},
			all: [ '**/*.json', '!node_modules/**', '!vendor/**' ]
		}
	});

	grunt.registerTask('test', [ 'eslint', 'banana' ]);
	grunt.registerTask('default', 'test');
};
