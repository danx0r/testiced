// Generated by IcedCoffeeScript 1.2.0i
(function() {
  var dub, main;

  dub = function(n, cb) {
    return cb(n * 2);
  };

  main = function() {
    return dub(10, function(v) {
      return console.log("result (in callback) of dub(10):", v);
    });
  };

  main();

}).call(this);
