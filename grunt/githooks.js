/**
 * @author michael.ash
 */
module.exports = {
  dev : {
    'pre-commit': 'jshint:test jshint:prod karma:continuous'
  }
};
