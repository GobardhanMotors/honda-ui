/**
 * @author michael.ash
 */
module.exports = {
  options : {
    banner : '<%= banner %>',
    stripBanners : true
  },
  dist : {
    src : ['lib/<%= pkg.name %>.js'],
    dest : 'dist/<%= pkg.name %>.js'
  },
  devBower : {
    src : [
      'app/bower_components/underscore/underscore.js',
      'app/bower_components/angular-route/angular-route.min.js',
      'app/bower_components/angular-grid/ng-grid.debug.js',
      'app/bower_components/ngFileReader/vendor/FileSaver.js',
      'app/bower_components/ngFileReader/vendor/swfobject.js',
      'app/bower_components/ngFileReader/vendor/jquery.FileReader.js',
      'app/bower_components/ngFileReader/src/ngFileReader.js',
      'app/bower_components/moment/min/moment-with-langs.js',
      'app/bower_components/d3/d3.min.js',
      'app/bower_components/nvd3/nv.d3.min.js',
      'app/bower_components/bootstrap/js/ui-bootstrap-tpls-0.10.0.min.js',
      'app/bower_components/angular-bootstrap/ui-bootstrap.min.js',
      'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
      'app/bower_components/angular-moment/angular-moment.min.js',
      'app/bower_components/angular-ui-utils/ui-utils.min.js',
      'app/bower_components/angular-ui-router/release/angular-ui-router.min.js',
      'app/bower_components/angularjs-nvd3-directives/dist/angularjs-nvd3-directives.min.js',
      'app/bower_components/ng-grid/build/ng-grid.debug.js',
      'app/bower_components/checklist-model/checklist-model.js',
      'app/bower_components/bootstrap/dist/js/bootstrapv3.0.3.js',
      'app/bower_components/jspdf/dist/jspdf.min.js',
      'app/bower_components/angular-sanitize/angular-sanitize.js'
    ],
    dest : 'app/build/bower.js'

  }
};