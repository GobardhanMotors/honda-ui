/**
 * @author michael.ash
 */
module.exports = function () {
  'use strict';
  return {
    'buildbower' : ['bower_concat', 'uglify:bower'],
    'bowerinstall' : ['shell:bowerinstall','buildbower'],
    'boweruninstall' : ['shell:boweruninstall','buildbower'],
    'bowerupdate' : ['shell:bowerupdate','buildbower'],
    'default' : ['concurrent:target1', 'concurrent:target2', 'githooks:dev', 'express:dev', 'watch'],
    'test' : ['concurrent:target1', 'karma:unit'],
    'devScript' : ['jshint:test', 'jshint:dev',  'karma:continuous', 'githooks:dev', 'express:dev', 'watch:scripts'],
    'devStyle' : ['compass:dev', 'githooks:dev', 'express:dev', 'watch:styles', 'watch:frontend'],
    'devStyleLR' : ['githooks:dev', 'express:dev', 'watch:styles', 'watch:frontend'],
    'serverOnly' : ['githooks:dev', 'express:dev', 'watch:frontend'],
    'dist' : ['jshint:test', 'jshint:dev', 'buildbower', 'karma:unit', 'compass:dist', 'jshint:prod', 'githooks:dev']
  };
};
