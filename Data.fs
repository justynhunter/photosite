module Data

type photo = {
    id: int64
    nextId: int
    prevId: int
    src: string
    alt: string
}

let photos : photo list = [
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

let getPhoto (id : int64) =
    List.find (fun (p : photo) -> p.id = id) photos
