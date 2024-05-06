module ContactPage

open Feliz.ViewEngine

let body =
    [
        Html.div [
            Html.form [
                Html.label [
                    prop.htmlFor "#text"
                    prop.text "enter your message below"
                ]
                Html.textarea [
                    prop.id "text"
                ]
                Html.input [
                    prop.type'.submit
                    prop.value "submit"
                ]
            ]
        ]
    ] |> Layout.main "contact"
