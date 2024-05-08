module Layout

open Giraffe.ViewEngine

let private head pageTitle =
    head [] [
        title [] [ str $"{pageTitle} - justynhunter.com" ]
        meta [ _charset "utf8" ]
        link [ _rel "stylesheet"; _href "/css/site.css" ]
        script [ _src "https://unpkg.com/htmx.org@1.9.9" ] []
    ]

let private header =
    header [] [
        div [] [
            a [ _href "/" ] [ 
                h1 [] [ str "justyn hunter" ]
            ]
        ]
        div [ _class "link_container" ] [
            a [ _href "/about" ] [ str "about" ]
            a [ _href "/contact" ] [ str "contact" ]
            a [ _href "https://www.instagram.com/justynh" ] [ str "insta" ]
            a [ _href "https://www.flickr.com/photos/j_hunter" ] [ str "flickr" ]
        ]
    ]

let private footer =
    footer [] [
        hr []
        div [] [ str "copyright 2024" ]
    ]

let main (pageTitle : string) (pageContent : XmlNode list) =
    html [] [
        head pageTitle
        body [] [
            header
            main [] pageContent 
            footer
        ]
    ] |> RenderView.AsString.htmlDocument
