dub = (n, cb) ->
    setTimeout (-> cb n*2), 2000

main = ->
    await 
        dub 10, defer v
    await
        dub v, defer v2
    console.log "result (in callback) of dub(10) ** 2:", v2

main()
console.log "this runs first"