module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        includePaths: [
          require('bourbon').includePaths,
          "node_modules",
          "scss"
        ],
        importer: require('grunt-sass-tilde-importer'),
        lineNumbers: true,
        sourceMap: true,
        outputStyle: 'nested',
        precision: 10
      },
      dist: {
        files: {
          'css/decanter.css': 'scss/decanter.scss',
          'css/decanter-no-markup.css': 'scss/decanter-no-markup.scss',
        }
      }
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')
        ]
      },
      dist: {
        src: 'css/*.css'
      }
    },
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('compile', ['sass:dist', 'postcss:dist']);
  grunt.registerTask('default', ['compile']);

}
