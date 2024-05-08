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
                label [ _for "#name" ] [
                    str "name"
                ]
                input [ 
                    _type "text"
                    _name "name"
                ]
                label [ _for "#message_box" ] [
                    str "enter your message below"
                ]
                textarea [ 
                    _id "message_box"
                    _name "message" 
                ] []
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
