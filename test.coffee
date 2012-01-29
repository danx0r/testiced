dub = (n, cb) ->
    setTimeout (-> cb n*2), 1000

main = ->
    dub 10, (v) ->
        dub v, (v2) ->
          console.log "result (in callback) of dub(10) ** 2:", v2

main()
console.log "this runs first"
