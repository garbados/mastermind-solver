var common = require('./common');
var knuth = require('./knuth');

function solve () {
  var settings = common.setup.apply(null, arguments);
  var rounds = knuth.call({
    judge: common.judge
  }, settings);
  return rounds;
}

module.exports = solve;
