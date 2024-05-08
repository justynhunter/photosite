module IndexPage

let page (id : int64) =    
    id
    |> Data.getPhoto 
    |> ImageCarousel.nodes
    |> Layout.main "justyn hunter"
