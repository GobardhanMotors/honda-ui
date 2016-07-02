/**
 * @author michael.ash
 */
module.exports = {
  all : {
    dest : 'app/build/_bower.js',
    exclude : [
      'jquery',
      'angular',
      'angular-mocks',
      'ng-ckeditor'
    ],
    dependencies: {
      'angular-moment' : 'moment',
      'angular-nvd3-directives' : 'd3'
    },
    /*
    maniFiles: {
      'ng-ckeditor' : ['/libs/ckeditor/ckeditor.js','ng-ckeditor.js'],
      'ngFileReader' : ['/vendor/FileSaver.js','vendor/swfobject.js','vendor/jquery.FileReader.js','src/ngFileReader.js']
    },
    */
    bowerOptions: {
      relative : false
    }
  }
};
