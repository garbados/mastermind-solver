var chai = require('chai');
var lib;
try {
  lib = require('../cov');
} catch (e) {
  lib = require('../lib');
}

describe('mastermind-solver', function () {
  it('should solve a puzzle in > 0 rounds', function () {
    var rounds = lib.solve();
    chai.expect(rounds.length).to.be.above(0);
  });

  it('should solve a puzzle in < 10 rounds', function () {
    var rounds = lib.solve();
    chai.expect(rounds.length).to.be.below(10);
  });
});
