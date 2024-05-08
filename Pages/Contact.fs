module ContactPage

open Giraffe.ViewEngine
open Giraffe.ViewEngine.Htmx

let page =
    [
        div [ _id "form_container" ] [
            form [
                _hxPost "api/contact-submit"
                _hxTarget "#form_container"
                _hxSwap "innerHTML"
            ] [
                label [ _for "#text" ] [
                    str "enter your message below"
                ]
                textarea [ _id "text" ] []
                input [
                    _type "submit"
                    _value "send"
                ]
            ]
        ]
    ]
    |> Layout.main "contact"

let submit =
    [
        div [] [
            p [] [
                str "Thank you for your message!"
            ]
        ]
    ]
