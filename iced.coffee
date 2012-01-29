dub = (n, cb) ->
    cb(n*2)

main = () ->
    dub(10, (v) ->
        console.log("result (in callback) of dub(10):", v)
    )

main();