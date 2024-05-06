module Layout

open Feliz.ViewEngine

let main (title : string) (pageContent : ReactElement list) =
    Html.html [
        Html.head [
            Html.title (title + " - justynhunter.com")
            Html.meta [ prop.charset.utf8 ]
            Html.link [ 
                prop.rel.stylesheet
                prop.href "css/site.css"
            ]
        ]
        Html.body [
            Html.header [
                Html.div [
                    Html.a [
                        prop.href "/"
                        prop.children [Html.h1 "justyn hunter"]
                    ]
                ]
                Html.div [
                    prop.className "link_container"
                    prop.children [
                        Html.a [
                            prop.text "insta"
                            prop.href "https://www.instagram.com/justynh"
                        ]
                        Html.a [
                            prop.text "flickr"
                            prop.href "https://www.flickr.com/photos/j_hunter"
                        ]
                    ]
                ]
            ]
            Html.main pageContent
            Html.footer [
                Html.hr []
                Html.div "copyright 2024"
            ]
        ]
    ]
    |> Render.htmlView
