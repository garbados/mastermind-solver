function gen_secret (length, max) {
  length = length || 4;
  max = max || 6;

  var secret = [];
  for (var i = 0; i < length; i++) {
    var num = Math.floor(Math.random() * max);
    secret.push(num);
  }
  return secret;
}

function judge (secret, guess) {
  var local_secret = [].concat(secret);
  var judgment = [0, 0];
  
  guess
  .forEach(function (char, i) {
    if (local_secret[i] === char) {
      local_secret[i] = null;
      judgment[0]++;
    }
  })
  .forEach(function (char, i) {
    if (local_secret.indexOf(char) > -1) {
      local_secret[i] = null;
      judgment[1]++;
    }
  });

  return judgment;
}

function setup () {
  var args = new Array(arguments);
  var secret, length, max;
  
  if (args.length === 2) {
    secret = args[0];
    length = secret.length;
    max = Math.max(Math.max(secret), 6);
  } else if (args.length === 1) {
    length = args[1];
    max = args[1];
    secret = gen_secret(length, max);
  }
  return [secret, length, max];
}

exports.judge = judge;
exports.setup = setup;
