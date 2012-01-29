dub = function (n, cb) {
    setTimeout(function () {
        cb(n*2)        
    }, 2000)
}

main = function(){
    dub(10, function(v){
        console.log("result (in callback) of dub(10):", v);
        console.log ("this runs last");
    });
}

main()
console.log ("this runs first");
