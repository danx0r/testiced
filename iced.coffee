dub = (n, cb) ->
    cb n*2

main = ->
    await dub 10, defer v
    console.log "result (in callback) of dub(10):", v

main()