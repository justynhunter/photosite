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
                    Html.h1 "Justyn Hunter"
                ]
                Html.div [
                    Html.h2 [
                        Html.a [
                            prop.text "contact"
                            prop.href "/contact"
                        ]
                    ]
                ]
            ]
            Html.main pageContent
            Html.footer [
                prop.text "Copyright 2024"
            ]
        ]
    ]
    |> Render.htmlView
