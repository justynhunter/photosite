module IndexPage

open Giraffe.ViewEngine
open Giraffe.ViewEngine.Htmx

type photo = {
    id: int64
    nextId: int
    prevId: int
    src: string
    alt: string
}

let photos = [
    { 
        id = 1
        nextId = 2
        prevId = 3
        src = "https://live.staticflickr.com/65535/53609244371_184f1a88c1_b.jpg"
        alt = "rotting house"
    }
    {
        id = 2
        nextId = 3
        prevId = 1
        src = "https://live.staticflickr.com/65535/53684852131_5d1a0c2a54_b.jpg"
        alt = "chimney"
    }
    { 
        id = 3
        nextId = 1
        prevId = 2
        src = "https://live.staticflickr.com/65535/53684851241_bac2ceb36b_b.jpg"
        alt = "rotting house"
    }
]

let private getPhoto (id : int64) =
    List.find (fun p -> p.id = id) photos

let private getPhotoElement (photo : photo) =
    div [ _id "image_container" ] [
        button [ 
            _id "btn_prev"
            _hxGet $"/api/get-photo/{photo.prevId}"
            _hxTrigger HxTrigger.Click
            _hxTarget "#image_container"
            _hxSwap "outerHTML"
        ] []
        img [
            _id "photo"
            _src photo.src
            _alt photo.alt
        ]
        button [
            _id "btn_next"
            _hxGet $"/api/get-photo/{photo.nextId}"
            _hxTrigger HxTrigger.Click
            _hxTarget "#image_container"
            _hxSwap "outerHTML"
        ] []
    ]

let nodes (id : int64) =
    id
    |> getPhoto
    |> getPhotoElement
    |> fun e -> [e]

let htmlString =
    getPhoto 1
    |> getPhotoElement
    |> Layout.main "justyn hunter"
