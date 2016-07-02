module.exports = {
  scripts : {
    files : ['<%= jshint.dev.files.src %>'],
    tasks : ['jshint:dev', 'karma:continuous']
  },
  frontend : {
    options : {
      livereload : true
    },
    files : [
    // triggering livereload when the .css file is updated
    // (compared to triggering when sass completes)
    // allows livereload to not do a full page refresh
      'app/themes/default/*.css'
    ]
  },
  styles : {
    files : ['app/themes/sass_*/**/*.scss'],
    tasks : ['compass:dev'],
    options : {
      livereload : true,
      sourcemap : true
    }
  },
  tests : {
    files : ['<%= jshint.test.files.src %>'],
    tasks : ['jshint:test', 'karma:continuous']
  },
  express : {
    files : ['**/*.js'],
    tasks : ['express:dev'],
    options : {
      spawn : false // Without this option specified express won't be
      // reloaded
    }
  },
  devExpress : {
    files : ['dist/**/*.js'],
    tasks : ['express:built'],
    options : {
      spawn : false // Without this option specified express won't be
      // reloaded
    }
  }
};