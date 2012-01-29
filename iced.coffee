dub = (n, cb) ->
    setTimeout (-> cb n*2), 2000

main = ->
    await dub 10, defer v
    console.log "result (in callback) of dub(10):", v
    console.log "this runs last"

main()
console.log "this runs first"
