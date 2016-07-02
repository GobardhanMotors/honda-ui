/**
* @author michael.ash
*/
module.exports = {
  dev : {
    files : {
      src : ['gruntfile.js', 'grunt/*.js', 'karma.conf.js', 'config/**/*.js', 'app/**/*.js', '!app/bower_components/**', '!app/build/**', '!app/templates/**/*.html.js']
    },
    options : {
      jshintrc : 'config/.jshintrc',
      ignores : ['app/common/dist/*']

    }

  },
  prod : {
    files : {
      src : ['gruntfile.js', 'grunt/*.js', 'karma.conf.js', 'config/**/*.js', 'app/**/*.js', '!app/bower_components/**', '!app/build/**', '!app/templates/**/*.html.js']
    },
    options : {
      jshintrc : 'config/prod.jshintrc',
      ignores : ['app/common/dist/*']
    }

  },
  test : {
    files : {
      src : ['test/**/*.js']
    },
    options : {
      jshintrc : 'config/.jshintrc',
      ignores : ['test/angular-mocks.js', 'test/test-helper.js','app/common/dist/*'],
      globals : {
        angular : true
      }

    }
  }
};