dub = function (n, cb) {
    cb(n*2)
}

main = function(){
    dub(10, function(v){
        console.log("result (in callback) of dub(10):", v);
    });
}

main()
