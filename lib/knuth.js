var judge = require('./common').judge;

// returns an array of choices made
// to solve the given secret
function knuth (secret, length, max) {
  var rounds = [];
  var ALL_CODES = gen_possible_codes(length, max);
  var number_set = new Array(max).map(function (_, i) {
    return i + 1;
  });
  var codes = [].concat(ALL_CODES);

  // first guess
  var guess = [];
  for (var i = 0; i < length; i++) {
    if (i > Math.floor(length / 2)) {
      guess.push(number_set[0]);
    } else {
      guess.push(number_set[1]);
    }
  }
  
  var judgment;
  while (true) {
    rounds.push(guess);
    judgment = judge(secret, guess);
    codes = filter_codes(guess, judgment, codes);
    if (codes.length > 1) {
      guess = minimax(guess, judgment, codes);
    } else {
      guess = codes[0];
    }
  }

  return rounds;
}

function filter_codes (guess, judgment, codes) {
  // select codes that would have gotten the same pegs
  // if the secret were the given guess
  return codes.filter(function (code) {
    var code_judgment = judge(guess, code);
    return JSON.stringify(code_judgment) === JSON.stringify(judgment);
  });
}

function minimax (guess, judgment, codes) {
  function count_possibilities (code) {
    // TODO
  }
  // for all codes
  // count how many possibilities each eliminates
  // choose the guess that removes the most possibilities
  var sorted_codes = codes.sort(function (a, b) {
    // count possibilities for each code
    var possibilities = {
      a: count_possibilities(a),
      b: count_possibilities(b),
    }
    if (possibilities.a.length >= possibilities.b.length)
      return possibilities.a;
    else
      return possibilities.b;
  });

  return sorted_codes[0];
}

module.exports = knuth;
