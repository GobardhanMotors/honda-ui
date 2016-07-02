module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // jshint: {
    //   files: [
    //       'src/js/src/**/*.js',
    //       '!src/js/vendors/'
    //   ],
    //   options: {
    //     jshintrc: '.jshintrc'
    //   }
    // },
    // uglify: {
    //   my_target: {
    //       //    options: {
    //       //      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
    //       //      '<%= grunt.template.today("yyyy-mm-dd") %> */',
    //       //      footer: '<%= footer %>',
    //       //      nameCache: '',
    //       //      quoteStyle: 1,
    //       //      mangle: false,
    //       //      beautify: true,
    //       //      compress: {
    //       //        drop_console: true, global_defs: {
    //       //          'DEBUG': false
    //       //        },
    //       //        dead_code: true
    //       //      },
    //     files: [{
    //       expand: true,
    //       cwd: 'src/js/',
    //       src: ['**/*.js', '!**/vendor/*.js'],
    //       dest: 'build/js'
    //     }]
    //   }
    // },
    // htmlmin: {
    //   dist: {
    //     options: {
    //       removeComments: true,
    //       collapseWhitespace: true
    //     },
    //     files: [{
    //       expand: true,
    //       cwd: 'src/',
    //       src: '**/*.html',
    //       dest: 'build/'
    //     }]
    //     //files: grunt.file.expandMapping(['src/**/*.html'], 'build/', {
    //     //  rename: function (destBase, destPath) {
    //     //    return destBase + destPath;
    //     //  }
    //     //})
    //   }
    // },
    // cssmin: {
    //   options: {
    //     shorthandCompacting: false,
    //     roundingPrecision: -1,
    //     processImport: false
    //   },
    //   target: {
    //     files: [{
    //       expand: true,
    //       cwd: 'src/styles/',
    //       src: ['vendorCss/*.{css,min.css}',
    //         'vendorCss/bootstrap-3.3.6.min.css',
    //         'vendorCss/bootstrap.vertical-tabs.css',
    //         'vendorCss/sb-admin-2.css',
    //         'vendorCss/jquery.idealforms.css',
    //         'vendorCss/dataTables.responsive.css',
    //       ],
    //       dest: 'build/styles',
    //     }]
    //   }
    // },
    // imagemin: {
    //   dynamic: {
    //     options: {
    //       optimizationLevel: 0
    //     },
    //     files: [{
    //       expand: true,
    //       cwd: 'src/images',
    //       src: ['**/**/**/*.{png,jpg,gif}'],
    //       dest: 'build/images'
    //     }]
    //   }
    // },
    //requirejs: {
    //  compile: {
    //    options: {
    //      baseUrl: "app/",
    //      mainConfigFile: "app/app.js",
    //      done: function(done, output) {
    //        var duplicates = require('rjs-build-analysis').duplicates(output);
 
    //        if (Object.keys(duplicates).length) {
    //          grunt.log.subhead('Duplicates found in requirejs build:');
    //          grunt.log.warn(duplicates);
    //          return done(new Error('r.js built duplicate modules, please check the excludes option.'));
    //        }
 
    //        done();
    //      }
    //    }
    //  }
    //},
    karma: {
      options: {
        // point all tasks to karma config file
        configFile: 'karma.conf.js'
      },
      unit: {
        // run tests once instead of continuously
        singleRun: true
      }
    },
    connect: {
      server: {
        options: {
          port: 4000,
          hostname: '*',
          open: {
            target: 'http://localhost:4000/app',
            appName: 'open', // name of the app that opens, ie: open, start, xdg-open
            callback: function () { } // called when the app has opened
          },
          keepalive: true,
          onCreateServer: function (server, connect, options) {
            var io = require('socket.io').listen(server);
            io.sockets.on('connection', function (socket) {
              // do something with socket
            });
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('run', ['karma']);
}