(function() {
  var dub, main;
  dub = function(n, cb) {
    return setTimeout((function() {
      return cb(n * 2);
    }), 1000);
  };
  main = function() {
    return dub(10, function(v) {
      return dub(v, function(v2) {
        return console.log("result (in callback) of dub(10) ** 2:", v2);
      });
    });
  };
  main();
  console.log("this runs first");
}).call(this);
