module IndexPage


let page =
    Data.getPhoto 1
    |> ImageCarousel.nodes
    |> Layout.main "justyn hunter"
