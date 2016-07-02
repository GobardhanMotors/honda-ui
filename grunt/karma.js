module.exports = {
  unit : {
    configFile : 'karma.conf.js'
  },
  continuous : {
    configFile : 'karma.conf.js',
    singleRun : true,
    browsers : ['Chrome']
  },
  continuousPhantom : {
    configFile : 'karma.conf.js',
    singleRun : true,
    browsers : ['PhantomJs']
  }
};