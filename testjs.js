dub = function (n, cb) {
    setTimeout(function () {
        cb(n*2)        
    }, 1000)
}

main = function(){
    dub(10, function(v){
	    dub(v, function(v2){
	        console.log("result (in callback) of dub(10) ** 2:", v2);
	    });
    });
}

main()
console.log ("this runs first");
