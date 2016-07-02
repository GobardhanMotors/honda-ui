/**
 * @author michael.ash
 */
module.exports = {
  bowerinstall: {
    command: function(libname){
      'use strict';
      return 'bower install ' + libname + ' -S';
    }
  },
  boweruninstall: {
    command: function(libname){
      'use strict';
      return 'bower uninstall ' + libname + ' -S';
    }
  },
  bowerupdate: {
    command: function(libname){
      'use strict';
      return 'bower update ' + libname;
    }
  }
};
