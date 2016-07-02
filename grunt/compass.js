/**
 * @author michael.ash
 */
module.exports = {
  dev : {
    Default : {
      options : {
        watch : false,
        sourcemap : true
      }
    }

  },
  devSM : {
    Default : {
      options : {
        watch : false,
        outputStyle : 'compressed',
        raw : '--sourcemap'
      }
    }

  },
  dist : {
    Default : {
      options : {
        watch : false,
        environment : 'production'
      }
    }
  }
};
