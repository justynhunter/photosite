module ImageCarousel

open Giraffe.ViewEngine
open Giraffe.ViewEngine.Htmx

let nodes (photo : Data.photo) =
    [
        div [ _id "image_container" ] [
            button [ 
                _id "btn_prev"
                _hxGet $"/api/get-photo/{photo.prevId}"
                _hxReplaceUrl $"/{photo.prevId}"
                _hxSwap "outerHTML swap:400ms"
                _hxTrigger HxTrigger.Click
                _hxTarget "#image_container"
            ] []
            img [
                _id "photo"
                _src photo.src
                _alt photo.alt
            ]
            button [
                _id "btn_next"
                _hxGet $"/api/get-photo/{photo.nextId}"
                _hxReplaceUrl $"/{photo.nextId}"
                _hxSwap "outerHTML swap:400ms setting:0ms"
                _hxTrigger HxTrigger.Click
                _hxTarget "#image_container"
            ] []
        ]
    ]
