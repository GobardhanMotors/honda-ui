/**
 * @author michael.ash
 */
module.exports = {

  bower : {
    options : {
      mangle : false,
      compress : true
    },
    files : {
      'app/build/bower.min.js' : 'app/build/_bower.js'
    }
  },
  options : {
    banner : '<%= banner %>'
  },
  dist : {
    src : '<%= concat.dist.dest %>',
    dest : 'dist/<%= pkg.name %>.min.js'
  }
};
