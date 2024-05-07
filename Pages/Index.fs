module IndexPage

open Giraffe.ViewEngine

type photo = {
    id: int
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

let private getPhoto (id : int) =
    List.find (fun p -> p.id = id) photos

let getPhotoElement (photo : photo) =
    div [ _id "image_container" ] [
        button [ _id "btn_prev"; _value (string photo.prevId) ] []
        img [
            _id "photo"
            _src photo.src
            _alt photo.alt
        ]
        button [ _id "btn_next"; _value (string photo.nextId)] []
    ]

let body =
    1
    |> getPhoto 
    |> getPhotoElement
    |> Layout.main "justyn hunter"
