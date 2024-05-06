module IndexPage

open Giraffe.ViewEngine

let body =
    img [ 
        _src "https://live.staticflickr.com/65535/53609244371_184f1a88c1_b.jpg"
        _alt "rotting house"
    ] |> Layout.main "justyn hunter"

