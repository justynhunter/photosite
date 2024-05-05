module IndexPage

open Feliz.ViewEngine

let body = 
    [
        Html.img [
            prop.src "https://live.staticflickr.com/65535/53609244371_184f1a88c1_b.jpg"
            prop.alt "rotting house"
        ]
    ] |> Layout.main "Justyn Hunter"
